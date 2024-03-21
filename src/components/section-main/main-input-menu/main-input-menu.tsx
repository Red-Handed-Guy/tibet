import Button from '../../button/button'
import DateInput from '../inputs/date-input/date-input'
import OptionsInput from '../inputs/options-input/options-input'
import styles from './main-input-menu.module.scss'

const MainInputMenu = () => {
  return (
    <form className={styles.form_container}>
      <OptionsInput label="выберите из списка" placeholder="Локация для тура" />
      <DateInput label="укажите диапазон" />
      <OptionsInput label="минимум 4 человека" placeholder="Участники" />

      <Button text="Найти программу" isColorInvert={true} type="button_big" />
    </form>
  )
}

export default MainInputMenu
