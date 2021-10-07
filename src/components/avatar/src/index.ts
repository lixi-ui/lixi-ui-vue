import { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'
import Avatar from './index.vue'

Avatar.install = (app: App): void => {
  app.component(Avatar.name, Avatar)
}

const _Avatar = Avatar as SFCWithInstall<typeof Avatar>

export default _Avatar
export const LxAvatar = _Avatar
