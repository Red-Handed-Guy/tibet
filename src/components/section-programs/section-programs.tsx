import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react'
import Button from '../button/button'
import TitleSubtitle from '../title-subtitle/title-subtitle'
import styles from './section-programs.module.scss'
import Image from 'next/image'
import useObserver from '@/src/hooks/useObserver'
import ShieldText from './shield-text/shield-text'
import SvgPeople from '@images/programs/people.svg'
import SvgShield from '@images/programs/shield.svg'
import SvgPrice from '@images/programs/price.svg'

import Jpeg1 from '@images/programs/cap.jpeg'
import Jpeg2 from '@images/programs/grass.jpeg'
import Jpeg3 from '@images/programs/snowmobile.jpeg'
import Jpeg4 from '@images/programs/stick.jpeg'

const jpegImages = [Jpeg1, Jpeg2, Jpeg3, Jpeg4]

const SectionPrograms: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const isVisibleObsrver = useObserver(contentRef)

  useEffect(() => {
    if (isVisibleObsrver) {
      setIsVisible(true)
    }
  }, [isVisibleObsrver])

  return (
    <section
      ref={contentRef}
      className={`section_standart section_standart_color_gray`}
    >
      <div
        className={`section__container ${!isVisible && 'section__container_hidden'} ${styles.container}`}
      >
        <div className={styles.text_wrapper}>
          <TitleSubtitle
            alignItems="flex-start"
            title="Лучшие программы для тебя"
            subtitle="наше предложение"
          />
          <p className={styles.text}>
            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
            латыни из колледжа.
          </p>
          <div className={styles.shields_wrapper}>
            <ShieldText
              ShieldSvg={SvgPeople}
              title="Опытный гид"
              subtitle="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
              backgroundColor="#E5EEEB"
            />
            <ShieldText
              ShieldSvg={SvgShield}
              title="Безопасный поход"
              subtitle="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
              backgroundColor="#E3E6EE"
            />
            <ShieldText
              ShieldSvg={SvgPrice}
              title="Лояльные цены"
              subtitle="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
              backgroundColor="#F3F1E1"
            />
          </div>
          <div className={styles.button_wrapper}>
            <Button text="Стоимость программ" type="button_big_adaptive" />
          </div>
        </div>
        <div className={styles.image_container}>
          {jpegImages.map((image, index) => (
            <div className={styles.image_wrapper} key={index}>
              <Image
                className={styles.image}
                placeholder="blur"
                src={image}
                alt={index + ''}
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  width: '100%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionPrograms
