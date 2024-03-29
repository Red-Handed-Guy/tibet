import { FC } from 'react'
import styles from './swiper-popular-ways.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardPopularWays from '../card-popular-ways/card-popular-ways'
import { Autoplay } from 'swiper/modules'
import { popularWays } from '@/src/data/popular-ways'

const SwiperPopularWays: FC = () => {
  const parametr = {
    spaceBetween: 20,
    modules: [Autoplay],
    speed: 3000,
  }

  return (
    <>
      <div className={styles.swiper_wrapper}>
        <Swiper {...parametr} slidesPerView="auto" autoplay={{ delay: 5000 }}>
          {popularWays.map(item => (
            <SwiperSlide className={styles.swiper_slide} key={item.title}>
              <CardPopularWays data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.not_swiper_container}>
        {popularWays.map(item => (
          <CardPopularWays data={item} key={item.title} />
        ))}
      </div>
    </>
  )
}

export default SwiperPopularWays
