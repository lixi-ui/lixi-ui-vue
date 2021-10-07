import { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'
import Dialog from './index.vue'

Dialog.install = (app: App): void => {
  app.component(Dialog.name, Dialog)
}

const _Dialog = Dialog as SFCWithInstall<typeof Dialog>

export default _Dialog
export {
  default as useDialog,
  useDialogProps,
  useDialogEmits,
} from './useDialog'

export const LxDialog = _Dialog
