import withInstall from '@lixi/utils/with-install'
import { ConfigProvider } from './config-provider'


const LxConfigProvider = withInstall(ConfigProvider)

export default LxConfigProvider

export {
  LxConfigProvider,
}
