import { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'
import Carousel from './main.vue'
import CarouselItem from './item.vue'

Carousel.install = (app: App): void => {
  app.component(Carousel.name, Carousel)
  app.component(CarouselItem.name, CarouselItem)
}

Carousel.CarouselItem = CarouselItem

const _Carousel = Carousel as any as SFCWithInstall<typeof Carousel> & {
  CarouselItem: typeof CarouselItem
}

export default _Carousel

export const LxCarousel = _Carousel
export const LxCarouselItem = CarouselItem
