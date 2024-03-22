import { FC } from 'react'
import styles from './swiper-popular-ways.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardPopularWays from '../card-popular-ways/card-popular-ways'
import LagoonJPEG from '@images/popular-ways/lagoon.jpeg'
import { Autoplay } from 'swiper/modules'

const SwiperPopularWays: FC = () => {
  const parametr = {
    spaceBetween: 20,
    modules: [Autoplay],
    speed: 6000,
  }

  return (
    <>
      <div className={styles.swiper_wrapper}>
        <Swiper {...parametr} slidesPerView="auto" autoplay={{ delay: 5000 }}>
          <SwiperSlide className={styles.swiper_slide}>
            <CardPopularWays
              rating={'4.9'}
              price={480}
              title={'Озеро возле гор'}
              subtitle={'романтическое приключение'}
              backgroundImage={LagoonJPEG}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <CardPopularWays
              rating={'4.9'}
              price={480}
              title={'Озеро возле гор'}
              subtitle={'романтическое приключение'}
              backgroundImage={LagoonJPEG}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>
            <CardPopularWays
              rating={'4.9'}
              price={480}
              title={'Озеро возле гор'}
              subtitle={'романтическое приключение'}
              backgroundImage={LagoonJPEG}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.not_swiper_container}>
        <CardPopularWays
          rating={'4.9'}
          price={480}
          title={'Озеро возле гор'}
          subtitle={'романтическое приключение'}
          backgroundImage={LagoonJPEG}
        />
        <CardPopularWays
          rating={'4.9'}
          price={480}
          title={'Озеро возле гор'}
          subtitle={'романтическое приключение'}
          backgroundImage={LagoonJPEG}
        />
        <CardPopularWays
          rating={'4.9'}
          price={480}
          title={'Озеро возле гор'}
          subtitle={'романтическое приключение'}
          backgroundImage={LagoonJPEG}
        />
      </div>
    </>
  )
}

export default SwiperPopularWays
