import { FC } from 'react'
import defaultStyles from '../inputs.module.scss'
import styles from './date-input.module.scss'

interface IDateInput {
  label: string
}

const DateInput: FC<IDateInput> = ({ label }) => {
  return (
    <div className={defaultStyles.container}>
      <div className={defaultStyles.input_border}>
        <input
          className={`${defaultStyles.text_placeholder} ${styles.input}`}
          type="date"
        />
        <input
          className={`${defaultStyles.text_placeholder} ${styles.input}`}
          type="date"
        />
      </div>
      <p className={defaultStyles.text_lable}>{label}</p>
    </div>
  )
}

export default DateInput
