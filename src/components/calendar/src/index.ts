import { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'
import Calendar from './src/index.vue'

Calendar.install = (app: App): void => {
  app.component(Calendar.name, Calendar)
}

const _Calendar = Calendar as SFCWithInstall<typeof Calendar>

export default _Calendar
export const LxCalendar = _Calendar
