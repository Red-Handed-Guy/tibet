import styles from './footer-list.module.scss'
import ArrowSvg from '@images/nav-arrow.svg'
import { IServices } from '@/types'
import { FC } from 'react'

interface IFooterList {
  data: IServices
}
const FooterList: FC<IFooterList> = ({ data }) => {
  const { links, title } = data

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {links.map(item => (
          <li className={styles.list_item} key={item.text}>
            <ArrowSvg className={styles.arrow} />
            <a href={item.link} className={styles.link}>
              {item.text}
            </a>
            {item.new && <p className={styles.new}>new</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterList
