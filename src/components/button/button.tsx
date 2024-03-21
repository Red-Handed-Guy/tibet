import { FC, MouseEventHandler } from 'react'
import styles from './button.module.scss'

interface IButton {
  text: string
  type: 'button_big' | 'button_big_adaptive' | 'button_small'
  isColorInvert?: boolean
}

const Button: FC<IButton> = ({ text, isColorInvert, type }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
  }

  return (
    <button
      onClick={handleClick}
      className={`${styles[type]} ${isColorInvert ? styles.button_color_invert : ''}`}
    >
      {text}
    </button>
  )
}

export default Button
