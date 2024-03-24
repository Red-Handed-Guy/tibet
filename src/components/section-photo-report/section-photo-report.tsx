import { FC, useEffect, useRef, useState } from 'react'
import useObserver from '@/src/hooks/useObserver'
import TitleSubtitle from '../title-subtitle/title-subtitle'
import styles from './section-photo-report.module.scss'
import Button from '../button/button'
import SwiperPhotoReport from '../swiper-photo-report/swiper-photo-report'

const SectionPhotoReport: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const isVisibleObsrver = useObserver(contentRef)

  useEffect(() => {
    if (isVisibleObsrver) {
      setIsVisible(true)
    }
  }, [isVisibleObsrver])

  return (
    <section ref={contentRef} className={`section_standart`}>
      <div
        className={`section__container ${!isVisible && 'section__container_hidden'} ${styles.container}`}
      >
        <TitleSubtitle
          alignItems={`center`}
          subtitle="фото-отчет"
          title="Делимся впечатлениями"
        />
        <SwiperPhotoReport />
        <Button text="Наш pinterest" type="button_big_adaptive" />
      </div>
    </section>
  )
}

export default SectionPhotoReport
