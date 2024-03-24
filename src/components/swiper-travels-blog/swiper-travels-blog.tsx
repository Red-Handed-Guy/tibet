import { FC } from 'react'
import styles from './swiper-travels-blog.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import CardTravelsBlog from '../card-travels-blog/card-travels-blog'
import { travelsBlog } from '@/src/data/travels-blog'

const SwiperTravelsBlog: FC = () => {
  const parametr = {
    spaceBetween: 20,
    modules: [Autoplay],
    speed: 3000,
  }

  return (
    <>
      <div className={styles.swiper_wrapper}>
        <Swiper {...parametr} slidesPerView="auto" autoplay={{ delay: 5000 }}>
          {travelsBlog.map(item => (
            <SwiperSlide className={styles.swiper_slide} key={item.title}>
              <CardTravelsBlog data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.not_swiper_container}>
        {travelsBlog.map(item => (
          <CardTravelsBlog data={item} key={item.title} />
        ))}
      </div>
    </>
  )
}

export default SwiperTravelsBlog
