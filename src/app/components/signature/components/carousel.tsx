'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import SignatureCarouselCardProps from './card'
import { signatures } from './sigantures'

export type Signature = {
  id: number
  title: string
  description: string[]
  price: number
  recommended?: boolean
}

const Carousel = () => {
  return (
    <div className="mx-auto mt-8 max-w-5xl text-davano-primary-darken">
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="flex w-full max-w-6xl justify-center"
      >
        {signatures.map((signature) => (
          <SwiperSlide key={signature.id} className="pl-32 sm:pl-12 lg:pl-7">
            <SignatureCarouselCardProps signature={signature} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
