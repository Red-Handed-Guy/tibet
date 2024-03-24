import { FC } from 'react'
import styles from './swiper-photo-report.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { photoReport } from '@/src/data/photo-report'
import Image from 'next/image'
import Fancybox from '../fancybox/fancybox'
import ZoomSVG from '@images/iconamoon_zoom-in-light.svg'

const SwiperPhotoReport: FC = () => {
  const parametr = {
    spaceBetween: 20,
    modules: [Autoplay],
    speed: 3000,
  }

  return (
    <>
      <div className={styles.swiper_wrapper}>
        <Fancybox>
          <Swiper {...parametr} slidesPerView="auto" autoplay={{ delay: 5000 }}>
            {photoReport.map(item => (
              <SwiperSlide className={styles.swiper_slide} key={item}>
                <a
                  data-fancybox="gallery"
                  href={item}
                  className={styles.gallery_item}
                >
                  <Image
                    className={styles.gallery_img}
                    alt={'картинка галереи'}
                    src={item}
                    width={280}
                    height={250}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fancybox>
      </div>
      <div className={styles.not_swiper_container}>
        <Fancybox>
          <div className={styles.gallery}>
            {photoReport.map(item => (
              <a
                data-fancybox="gallery"
                href={item}
                className={styles.gallery_item}
                key={item}
              >
                <Image
                  className={styles.gallery_img}
                  alt={'картинка галереи'}
                  sizes="(max-width: 767px) 0vw, (max-width: 1000px) 66vw, 50vw"
                  src={item}
                  fill
                />
                <div className={styles.gallery_overlay}>
                  <ZoomSVG />
                </div>
              </a>
            ))}
          </div>
        </Fancybox>
      </div>
    </>
  )
}

export default SwiperPhotoReport
