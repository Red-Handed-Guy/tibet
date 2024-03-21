import { FC, MouseEventHandler, useState } from 'react'
import styles from './burger-button.module.scss'

interface IBurgerButton {
  onToggle: () => void
}
const BurgerButton: FC<IBurgerButton> = ({ onToggle }) => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    setIsActive(!isActive)
    onToggle()
  }

  return (
    <button
      onClick={handleToggle}
      className={`${styles.burger} ${isActive && styles.burger_active}`}
    >
      <span className={styles.burger_line}></span>
      <span className={styles.burger_line}></span>
      <span className={styles.burger_line}></span>
    </button>
  )
}

export default BurgerButton
