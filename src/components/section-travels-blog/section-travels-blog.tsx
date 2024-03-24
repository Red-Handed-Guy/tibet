import { FC, useEffect, useRef, useState } from 'react'
import useObserver from '@/src/hooks/useObserver'
import TitleSubtitle from '../title-subtitle/title-subtitle'
import styles from './section-travels-blog.module.scss'
import Button from '../button/button'
import SwiperTravelsBlog from '../swiper-travels-blog/swiper-travels-blog'

const SectionTravelsBlog: FC = () => {
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
          subtitle="делимся впечатлениями"
          title="Блог о путешествиях"
        />
        <SwiperTravelsBlog />
        <Button text="Другие материалы" type="button_big_adaptive" />
      </div>
    </section>
  )
}

export default SectionTravelsBlog
