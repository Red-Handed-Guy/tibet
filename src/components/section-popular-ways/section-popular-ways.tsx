import { FC, useEffect, useRef, useState } from 'react'
import useObserver from '@/src/hooks/useObserver'
import TitleSubtitle from '../title-subtitle/title-subtitle'
import CardPopularWays from '../card-popular-ways/card-popular-ways'
import LagoonJPEG from '@images/popular-ways/lagoon.jpeg'
import SwiperPopularWays from '../swiper-popular-ways/swiper-popular-ways'
import styles from './section-popular-ways.module.scss'
import Button from '../button/button'
import useWindoWidth from '@/src/hooks/windowWidth'

const SectionPopularWays: FC = () => {
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
          subtitle="по версии отдыхающих"
          title="Популярные направления"
        />
        <SwiperPopularWays />
        <Button text="Рейтинг направлений" type="button_big_adaptive" />
      </div>
    </section>
  )
}

export default SectionPopularWays
