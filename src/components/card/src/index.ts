import { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'
import Card from './src/index.vue'

Card.install = (app: App): void => {
  app.component(Card.name, Card)
}

const _Card = Card as SFCWithInstall<typeof Card>

export default _Card
export const LxCard = _Card
