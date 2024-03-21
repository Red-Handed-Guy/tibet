import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react'
import Button from '../button/button'
import TitleSubtitle from '../title-subtitle/title-subtitle'
import styles from './section-about.module.scss'
import Image from 'next/image'
import useObserver from '@/src/hooks/useObserver'
import JpegHouse from '@images/about/house.jpeg'
import JpegMountain from '@images/about/fdf3f394b178d6bba7e11865e90f42cf.jpeg'
import SvgPlay from '@images/play.svg'
import VideoPlayer from '../youtube/youtube'
import { YouTubePlayer } from 'react-youtube'

const SectionAbout: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isVideoPlay, setIsVideoPlay] = useState(false)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const isVisibleObsrver = useObserver(contentRef)
  const playerRef = useRef<YouTubePlayer | null>(null)

  useEffect(() => {
    if (isVisibleObsrver) {
      setIsVisible(true)
    }
  }, [isVisibleObsrver])

  const handlePlay: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    if (isVideoReady) {
      playerRef.current.playVideo()
      setIsVideoPlay(true)
    }
  }

  return (
    <section ref={contentRef} className={`section_standart`}>
      <div
        className={`section__container ${!isVisible && 'section__container_hidden'} ${styles.container}`}
      >
        <div className={styles.image_container}>
          <div className={styles.back_image_wrapper}>
            <Image
              src={JpegMountain}
              alt={'Гора'}
              placeholder="blur"
              width={350}
              height={400}
              style={{ objectFit: 'cover', zIndex: 2, width: '100%' }}
              quality={100}
            />
          </div>
          <div className={styles.video}>
            <VideoPlayer
              setIsVideoPlay={setIsVideoPlay}
              playerRef={playerRef}
              setIsVideoReady={setIsVideoReady}
            />
            {!isVideoPlay && (
              <div className={styles.image_prewiew_wraper}>
                <Image
                  src={JpegHouse}
                  alt={'Дом'}
                  placeholder="blur"
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', zIndex: 3, width: '100%' }}
                  quality={100}
                />
                {isVideoReady && (
                  <button
                    onClick={handlePlay}
                    className={styles.image_prewiew_button}
                  >
                    <SvgPlay />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={styles.text_wrapper}>
          <TitleSubtitle
            alignItems="flex-start"
            title="Исследуйте все горные массивы мира вместе с нами"
            subtitle="о нашем походе"
          />
          <p className={styles.text}>
            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
            латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
            самых странных слов в Lorem Ipsum, &quot;consectetur&quot; и занялся
            его поисками в классической латинской литературе.
          </p>
          <div className={styles.button_wrapper}>
            <Button text="Программа тура" type="button_big_adaptive" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAbout
