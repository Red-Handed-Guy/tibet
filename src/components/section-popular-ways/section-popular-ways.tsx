import { FC, useEffect, useRef, useState } from 'react'
import useObserver from '@/src/hooks/useObserver'
import TitleSubtitle from '../title-subtitle/title-subtitle'
import CardPopularWays from '../card-popular-ways/card-popular-ways'

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
        className={`section__container ${!isVisible && 'section__container_hidden'}`}
      >
        <TitleSubtitle
          alignItems="center"
          subtitle="по версии отдыхающих"
          title="Популярные направления"
        />
        <CardPopularWays />
      </div>
    </section>
  )
}

export default SectionPopularWays
