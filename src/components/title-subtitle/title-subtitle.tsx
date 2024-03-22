import { FC } from 'react'
import styles from './title-subtitle.module.scss'

interface ITitleSubtitle {
  title: string
  subtitle: string
  alignItems: 'center' | 'flex-start'
  mini?: boolean
}

const TitleSubtitle: FC<ITitleSubtitle> = ({
  title,
  subtitle,
  alignItems,
  mini,
}) => {
  return (
    <div className={`${styles.container} ${styles[alignItems]}`}>
      <p className={mini ? styles.subtitle_mini : styles.subtitle}>
        {subtitle}
      </p>
      <h2 className={mini ? styles.title_mini : styles.title}>{title}</h2>
    </div>
  )
}

export default TitleSubtitle
