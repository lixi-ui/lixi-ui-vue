import Form from './form.vue'
import FormItem from './form-item.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Form.install = (app: App): void => {
  app.component(Form.name, Form)
  app.component(FormItem.name, FormItem)
}

Form.FormItem = FormItem

const _Form = Form as any as SFCWithInstall<typeof Form> & {
  FormItem: typeof FormItem
}

export default _Form
export const LxForm = _Form
export const LxFormItem = FormItem
