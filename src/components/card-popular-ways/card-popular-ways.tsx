import { FC } from 'react'
import styles from './card-popular-ways.module.scss'
import Image from 'next/image'
import Button from '../button/button'
import StarSVG from '@images/popular-ways/star.svg'
import { IPopularWaysData } from '@/types'

interface ICardPopularWays {
  data: IPopularWaysData
}

const CardPopularWays: FC<ICardPopularWays> = ({ data }) => {
  const { backgroundImage, rating, price, title, subtitle } = data
  return (
    <article className={styles.card_container}>
      <Image
        src={backgroundImage}
        alt="lagoon"
        fill
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: 'cover', width: '100%', zIndex: 1 }}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.header_title_wrapper}>
            <h3 className={styles.header_title}>{title}</h3>
            <p className={styles.header_subtitle}>{subtitle}</p>
          </div>
          <p className={styles.header_price}>{`${price} $`}</p>
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
        <p className={styles.rating_text}>{rating}</p>
      </div>
    </article>
  )
}

export default CardPopularWays
