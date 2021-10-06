## Dialog

Informs users while preserving the current page state.

### Basic usage

Dialog pops up a dialog box, and it's quite customizable.

:::demo Set `model-value / v-model` attribute with a `Boolean`, and Dialog shows when it is `true`. The Dialog has two parts: `body` and `footer`, and the latter requires a `slot` named `footer`. The optional `title` attribute (empty by default) is for defining a title. Finally, this example demonstrates how `before-close` is used.

```html
<lx-button type="text" @click="dialogVisible = true">click to open the Dialog</lx-button>

<lx-dialog
  title="Tips"
  v-model="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>This is a message</span>
  <template #footer>
    <span class="dialog-footer">
      <lx-button @click="dialogVisible = false">Cancel</lx-button>
      <lx-button type="primary" @click="dialogVisible = false">Confirm</lx-button>
    </span>
  </template>
</lx-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
            this.dialogVisible = false
          })
          .catch(_ => {});
      }
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';
  import { LxMessageBox } from 'element-plus';

  export default defineComponent({
    setup() {
      const dialogVisible = ref(false);
      
      const handleClose = (done) => {
        LxMessageBox
          .confirm('Are you sure to close this dialog?')
          .then((_) => {
            done();
          })
          .catch((_) => {});
      };
      return {
        dialogVisible,
        handleClose,
      };
    },
  });

</setup>
-->
```
:::

:::tip
`before-close` only works when user clicks the close icon or the backdrop. If you have buttons that close the Dialog in the `footer` named slot, you can add what you would do with `before-close` in the buttons' click event handler.
:::

### Customizations

The content of Dialog can be anything, even a table or a form. This example shows how to use Lxement Plus Table and Form with Dialog。

:::demo

```html
<lx-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</lx-button>

<lx-dialog title="Shipping address" v-model="dialogTableVisible">
  <lx-table :data="gridData">
    <lx-table-column property="date" label="Date" width="150"></lx-table-column>
    <lx-table-column property="name" label="Name" width="200"></lx-table-column>
    <lx-table-column property="address" label="Address"></lx-table-column>
  </lx-table>
</lx-dialog>

<!-- Form -->
<lx-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</lx-button>

<lx-dialog title="Shipping address" v-model="dialogFormVisible">
  <lx-form :model="form">
    <lx-form-item label="Promotion name" :label-width="formLabelWidth">
      <lx-input v-model="form.name" autocomplete="off"></lx-input>
    </lx-form-item>
    <lx-form-item label="Zones" :label-width="formLabelWidth">
      <lx-select v-model="form.region" placeholder="Please select a zone">
        <lx-option label="Zone No.1" value="shanghai"></lx-option>
        <lx-option label="Zone No.2" value="beijing"></lx-option>
      </lx-select>
    </lx-form-item>
  </lx-form>
  <template #footer>
    <span class="dialog-footer">
      <lx-button @click="dialogFormVisible = false">Cancel</lx-button>
      <lx-button type="primary" @click="dialogFormVisible = false">Confirm</lx-button>
    </span>
  </template>
</lx-dialog>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        gridData: [
          {
            date: '2016-05-02',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
          {
            date: '2016-05-04',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
          {
            date: '2016-05-01',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
          {
            date: '2016-05-03',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
        ],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        formLabelWidth: '120px',
      });

      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```
:::

### Nested Dialog
If a Dialog is nested in another Dialog, `append-to-body` is required.
:::demo Normally we do not recommend using nested Dialog. If you need multiple Dialogs rendered on the page, you can simply flat them so that they're siblings to each other. If you must nest a Dialog inside another Dialog, set `append-to-body` of the nested Dialog to true, and it will append to body instead of its parent node, so both Dialogs can be correctly rendered.
```html
<template>
  <lx-button type="text" @click="outerVisible = true">open the outer Dialog</lx-button>

  <lx-dialog title="Outer Dialog" v-model="outerVisible">
    <template #default>
      <lx-dialog
          width="30%"
          title="Inner Dialog"
          v-model="innerVisible"
          append-to-body>
      </lx-dialog>
    </template>
    <template #footer>
      <div class="dialog-footer">
        <lx-button @click="outerVisible = false">Cancel</lx-button>
        <lx-button type="primary" @click="innerVisible = true">open the inner Dialog</lx-button>
      </div>
    </template>
  </lx-dialog>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        outerVisible: ref(false),
        innerVisible: ref(false),
      };
    },
  });

</setup>
-->
```
:::

### Centered content
Dialog's content can be centered.

:::demo Setting `center` to `true` will center dialog's header and footer horizontally. `center` only affects Dialog's header and footer. The body of Dialog can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.

```html
<template>
  <lx-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</lx-button>

  <lx-dialog
    title="Warning"
    v-model="centerDialogVisible"
    width="30%"
    center>
    <span>It should be noted that the content will not be aligned in center by default</span>
    <template #footer>
      <span class="dialog-footer">
        <lx-button @click="centerDialogVisible = false">Cancel</lx-button>
        <lx-button type="primary" @click="centerDialogVisible = false">Confirm</lx-button>
      </span>
    </template>
  </lx-dialog>
</template>
<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        centerDialogVisible: ref(false),
      };
    },
  });

</setup>
-->
```
:::

:::tip
The content of Dialog is lazily rendered, which means the default slot is not rendered onto the DOM until it is firstly opened. Therefore, if you need to perform a DOM manipulation or access a component using `ref`, do it in the `open` event callback.
:::

### Destroy on Close
When this is feature is enabled, the content under default slot will be destroyed with a `v-if` directive. Enable this when you have perf concerns.

:::demo Note that by enabling this feature, the content will not be rendered before `transition.beforeEnter` dispatched, there will only be `overlay` `header(if any)` `footer(if any)`.

```html
<lx-button type="text" @click="centerDialogVisible = true">Click to open Dialog</lx-button>

<lx-dialog
  title="Notice"
  v-model="centerDialogVisible"
  width="30%"
  destroy-on-close
  center>
  <span>Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered</span>
  <div>
    <strong>Extra content (Not rendered)</strong>
  </div>
  <template #footer>
    <span class="dialog-footer">
      <lx-button @click="centerDialogVisible = false">Cancel</lx-button>
      <lx-button type="primary" @click="centerDialogVisible = false">Confirm</lx-button>
    </span>
  </template>

</lx-dialog>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        centerDialogVisible: ref(false),
      };
    },
  });

</setup>
-->

```
:::tip
When using `modal` = false, please make sure that `append-to-body` was set to **true**, because `Dialog` was positioned by `position: relative`, when `modal` gets removed, `Dialog` will position itself based on the current position in the DOM, instead of `Document.Body`, thus the style will be messed up.
:::

### Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model-value / v-model   | visibility of Dialog | boolean | — | — |
| title     | title of Dialog. Can also be passed with a named slot (see the following table) | string    | — | — |
| width     | width of Dialog | string / number    | — | 50% |
| fullscreen     | whether the Dialog takes up full screen | boolean    | — | false |
| top      | value for `margin-top` of Dialog CSS | string    | — | 15vh |
| modal     | whether a mask is displayed | boolean   | — | true |
| append-to-body     | whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true` | boolean   | — | false |
| lock-scroll     | whether scroll of body is disabled while Dialog is displayed | boolean   | — | true |
| custom-class      | custom class names for Dialog | string    | — | — |
| open-delay        | Time(milliseconds) before open | number    | — | 0 |
| close-delay       | Time(milliseconds) before close | number    | — | 0 |
| close-on-click-modal | whether the Dialog can be closed by clicking the mask | boolean    | — | true |
| close-on-press-escape | whether the Dialog can be closed by pressing ESC | boolean    | — | true |
| show-close | whether to show a close button | boolean    | — | true |
| before-close | callback before Dialog closes, and it will prevent Dialog from closing | function(done)，done is used to close the Dialog | — | — |
| center | whether to align the header and footer in center | boolean | — | false |
| destroy-on-close | Destroy elements in Dialog when closed   | boolean | — | false |

### Slots

| Name | Description |
|------|--------|
| — | content of Dialog |
| title | content of the Dialog title |
| footer | content of the Dialog footer |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| open | triggers when the Dialog opens | — |
| opened | triggers when the Dialog opening animation ends | — |
| close | triggers when the Dialog closes | — |
| closed | triggers when the Dialog closing animation ends | — |
