<template>
  <div
    ref="formItemRef"
    class="lx-form-item"
    :class="formItemClass"
  >
    <LabelWrap
      :is-auto-width="labelStyle.width === 'auto'"
      :update-all="lxForm.labelWidth === 'auto'"
    >
      <label
        v-if="label || $slots.label"
        :for="labelFor"
        class="lx-form-item__label"
        :style="labelStyle"
      >
        <slot name="label" :label="label + lxForm.labelSuffix">
          {{ label + lxForm.labelSuffix }}
        </slot>
      </label>
    </LabelWrap>
    <div class="lx-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="lx-zoom-in-top">
        <slot
          v-if="shouldShowError"
          name="error"
          :error="validateMessage"
        >
          <div
            class="lx-form-item__error"
            :class="{
              'lx-form-item__error--inline':
                typeof inlineMessage === 'boolean'
                  ? inlineMessage
                  : lxForm.inlineMessage || false
            }"
          >
            {{ validateMessage }}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import AsyncValidator from 'async-validator'
import mitt from 'mitt'
import { NOOP } from '@vue/shared'
import { addUnit, getPropByPath, useGlobalConfig } from '@lixi/utils/util'
import { isValidComponentSize } from '@lixi/utils/validators'
import LabelWrap from './label-wrap'
import { lxFormEvents, lxFormItemKey, lxFormKey } from '@lixi/tokens'

import type { PropType, CSSProperties } from 'vue'
import type { ComponentSize } from '@lixi/utils/types'
import type { LxFormContext, ValidateFieldCallback } from '@lixi/tokens'
import type { FormItemRule } from './form.type'

export default defineComponent({
  name: 'LxFormItem',
  componentName: 'LxFormItem',
  components: {
    LabelWrap,
  },
  props: {
    label: String,
    labelWidth: {
      type: [String, Number],
      default: '',
    },
    prop: String,
    required: {
      type: Boolean,
      default: undefined,
    },
    rules: [Object, Array] as PropType<FormItemRule | FormItemRule[]>,
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: '',
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
  },
  setup(props, { slots }) {
    const formItemMitt = mitt()
    const $ELEMENT = useGlobalConfig()

    const lxForm = inject(lxFormKey, {} as LxFormContext)
    const validateState = ref('')
    const validateMessage = ref('')
    const validateDisabled = ref(false)

    const computedLabelWidth = ref('')

    const formItemRef = ref<HTMLDivElement>()

    const vm = getCurrentInstance()
    const isNested = computed(() => {
      let parent = vm.parent
      while (parent && parent.type.name !== 'LxForm') {
        if (parent.type.name === 'LxFormItem') {
          return true
        }
        parent = parent.parent
      }
      return false
    })


    let initialValue = undefined

    watch(
      () => props.error,
      val => {
        validateMessage.value = val
        validateState.value = val ? 'error' : ''
      }, {
        immediate: true,
      },
    )
    watch(
      () => props.validateStatus,
      val => {
        validateState.value = val
      },
    )

    const labelFor = computed(() => props.for || props.prop)
    const labelStyle = computed(() => {
      const ret: CSSProperties = {}
      if (lxForm.labelPosition === 'top') return ret
      const labelWidth = addUnit(props.labelWidth) || addUnit(lxForm.labelWidth)
      if (labelWidth) {
        ret.width = labelWidth
      }
      return ret
    })
    const contentStyle = computed(() => {
      const ret: CSSProperties = {}
      if (lxForm.labelPosition === 'top' || lxForm.inline) {
        return ret
      }
      if (!props.label && !props.labelWidth && isNested.value) {
        return ret
      }
      const labelWidth = addUnit(props.labelWidth) || addUnit(lxForm.labelWidth)
      if (!props.label && !slots.label) {
        ret.marginLeft = labelWidth
      }
      return ret
    })
    const fieldValue = computed(() => {
      const model = lxForm.model
      if (!model || !props.prop) {
        return
      }

      let path = props.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      return getPropByPath(model, path, true).v
    })
    const isRequired = computed(() => {
      let rules = getRules()
      let required = false

      if (rules && rules.length) {
        rules.every(rule => {
          if (rule.required) {
            required = true
            return false
          }
          return true
        })
      }
      return required
    })
    const lxFormItemSize = computed(() => props.size || lxForm.size)
    const sizeClass = computed<ComponentSize>(() => {
      return lxFormItemSize.value || $ELEMENT.size
    })

    const validate = (trigger: string, callback: ValidateFieldCallback = NOOP) => {
      validateDisabled.value = false
      const rules = getFilteredRule(trigger)
      if ((!rules || rules.length === 0) && props.required === undefined) {
        callback()
        return
      }
      validateState.value = 'validating'
      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger
        })
      }
      descriptor[props.prop] = rules
      const validator = new AsyncValidator(descriptor)
      const model = {}
      model[props.prop] = fieldValue.value
      validator.validate(
        model,
        { firstFields: true },
        (errors, invalidFields) => {
          validateState.value = !errors ? 'success' : 'error'
          validateMessage.value = errors ? errors[0].message : ''
          callback(validateMessage.value, invalidFields)
          lxForm.emit?.(
            'validate',
            props.prop,
            !errors,
            validateMessage.value || null,
          )
        },
      )
    }

    const clearValidate = () => {
      validateState.value = ''
      validateMessage.value = ''
      validateDisabled.value = false
    }
    const resetField = () => {
      validateState.value = ''
      validateMessage.value = ''
      let model = lxForm.model
      let value = fieldValue.value
      let path = props.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }
      let prop = getPropByPath(model, path, true)
      validateDisabled.value = true
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(initialValue)
      } else {
        prop.o[prop.k] = initialValue
      }
      // reset validateDisabled after onFieldChange triggered
      nextTick(() => {
        validateDisabled.value = false
      })
    }

    const getRules = () => {
      const formRules = lxForm.rules
      const selfRules = props.rules
      const requiredRule =
        props.required !== undefined ? { required: !!props.required } : []

      const prop = getPropByPath(formRules, props.prop || '', false)
      const normalizedRule = formRules
        ? (prop.o[props.prop || ''] || prop.v)
        : []

      return [].concat(selfRules || normalizedRule || []).concat(requiredRule)
    }
    const getFilteredRule = trigger => {
      const rules = getRules()

      return rules
        .filter(rule => {
          if (!rule.trigger || trigger === '') return true
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1
          } else {
            return rule.trigger === trigger
          }
        })
        .map(rule => ({ ...rule }))
    }

    const onFieldBlur = () => {
      validate('blur')
    }

    const onFieldChange = () => {
      if (validateDisabled.value) {
        validateDisabled.value = false
        return
      }

      validate('change')
    }
    const updateComputedLabelWidth = (width: string | number) => {
      computedLabelWidth.value = width ? `${width}px` : ''
    }

    const addValidateEvents = () => {
      const rules = getRules()

      if (rules.length || props.required !== undefined) {
        formItemMitt.on('el.form.blur', onFieldBlur)
        formItemMitt.on('el.form.change', onFieldChange)
      }
    }
    const removeValidateEvents = () => {
      formItemMitt.off('el.form.blur', onFieldBlur)
      formItemMitt.off('el.form.change', onFieldChange)
    }

    const lxFormItem = reactive({
      ...toRefs(props),
      size: sizeClass,
      validateState,
      $el: formItemRef,
      formItemMitt,
      removeValidateEvents,
      addValidateEvents,
      resetField,
      clearValidate,
      validate,
      updateComputedLabelWidth,
    })

    onMounted(() => {
      if (props.prop) {
        lxForm.formMitt?.emit(lxFormEvents.addField, lxFormItem)

        let value = fieldValue.value
        initialValue = Array.isArray(value)
          ? [...value] : value

        addValidateEvents()
      }
    })
    onBeforeUnmount(() => {
      lxForm.formMitt?.emit(lxFormEvents.removeField, lxFormItem)
    })

    provide(lxFormItemKey, lxFormItem)

    const formItemClass = computed(() => [
      {
        'lx-form-item--feedback': lxForm.statusIcon,
        'is-error': validateState.value === 'error',
        'is-validating': validateState.value === 'validating',
        'is-success': validateState.value === 'success',
        'is-required': isRequired.value || props.required,
        'is-no-asterisk': lxForm.hideRequiredAsterisk,
      },
      sizeClass.value ? 'lx-form-item--' + sizeClass.value : '',
    ])

    const shouldShowError = computed(() => {
      return validateState.value === 'error' && props.showMessage && lxForm.showMessage
    })

    return {
      formItemRef,
      formItemClass,
      shouldShowError,
      lxForm,
      labelStyle,
      contentStyle,
      validateMessage,
      labelFor,
      resetField,
      clearValidate,
    }
  },
})
</script>
