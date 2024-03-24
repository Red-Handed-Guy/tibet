import { FC } from 'react'
import styles from './card-travels-blog.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { ITravelsBlogData } from '@/types'

interface ICardTravelsBlog {
  data: ITravelsBlogData
}

const CardTravelsBlog: FC<ICardTravelsBlog> = ({ data }) => {
  const { date, title, image, link, text } = data
  return (
    <article className={styles.card}>
      <div className={styles.card_img_wrapper}>
        <Image
          src={image}
          alt={title}
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover', width: '100%', zIndex: 1 }}
        />
      </div>
      <div className={styles.card_text_wrapper}>
        <h3 className={styles.card_title}>
          <Link className={styles.card_title_link} href={link}>
            {title}
          </Link>
        </h3>
        <div className={styles.card_text_container}>
          <p className={styles.card_text}>{text}</p>
        </div>
        <div className={styles.card_footer}>
          <p className={styles.card_date}>{date}</p>
          <Link className={styles.card_link} href={link}>
            читать статью
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CardTravelsBlog
