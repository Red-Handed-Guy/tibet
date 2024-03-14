import { FC } from 'react'
import styles from './button.module.scss'

interface IButton {
  text: string
  isColorInvert?: boolean
}

const Button: FC<IButton> = ({ text, isColorInvert }) => {
  return (
    <button
      className={`${styles.button} ${isColorInvert ? styles.button_color_invert : ''}`}
    >
      {text}
    </button>
  )
}

export default Button
