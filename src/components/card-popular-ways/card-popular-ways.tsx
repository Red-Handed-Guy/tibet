import { FC, SVGProps } from 'react'
import styles from './card-popular-ways.module.scss'
import Image from 'next/image'
import LagoonJPEG from '@images/popular-ways/lagoon.jpeg'
import Button from '../button/button'
import StarSVG from '@images/popular-ways/star.svg'

interface ICardPopularWays {
  rating: string
  title: string
  subtitle: string
  backgroundImage: FC<SVGProps<SVGElement>>
}

const CardPopularWays: FC<ICardPopularWays> = ({
  backgroundImage,
  rating,
  subtitle,
  title,
}) => {
  return (
    <article className={styles.card_container}>
      <Image
        src={LagoonJPEG}
        alt="lagoon"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', width: '100%', zIndex: 1 }}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.header_title_wrapper}>
            <h3 className={styles.header_title}>Озеро возле гор</h3>
            <p className={styles.header_subtitle}>романтическое приключение</p>
          </div>
          <p className={styles.header_pice}>{`price $`}</p>
        </div>
        <div className={styles.main}>
          <p className={styles.main_text}>
            Его корни уходят в один фрагмент классической латыни 45 года н.э.,
            то есть более двух тысячелетий назад. Ричард МакКлинток, профессор
            латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
            самых странных слов в Lorem Ipsum, &quot;consectetur&quot; и занялся
            его поисками в классической латинской литературе.
          </p>
          <div>
            <Button text={'Программа тура'} type="button_small" />
          </div>
        </div>
      </div>
      <div className={styles.rating_wrapper}>
        <StarSVG />
        <p className={styles.rating_text}>4.5</p>
      </div>
    </article>
  )
}

export default CardPopularWays
