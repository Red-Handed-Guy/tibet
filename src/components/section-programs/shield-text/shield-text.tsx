import { FC, SVGProps } from 'react'
import styles from './shield-text.module.scss'

interface IShieldText {
  ShieldSvg: FC<SVGProps<SVGElement>>
  title: string
  subtitle: string
  backgroundColor: string
}
const ShieldText: FC<IShieldText> = ({
  ShieldSvg,
  subtitle,
  title,
  backgroundColor,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.svg_wrapper} style={{ backgroundColor }}>
        <ShieldSvg />
      </div>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  )
}

export default ShieldText
