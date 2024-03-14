import { FC } from 'react'
import SvgArrow from '@images/arrow.svg'
import defaultStyles from '../inputs.module.scss'
import styles from './options-input.module.scss'

interface IOptionsInput {
  label: string
  placeholder: string
}

const OptionsInput: FC<IOptionsInput> = ({ label, placeholder }) => {
  return (
    <div className={defaultStyles.container}>
      <div className={defaultStyles.input_border}>
        <div className={styles.option_wrapper}>
          <p className={defaultStyles.text_placeholder}>{placeholder}</p>
          <SvgArrow />
        </div>
      </div>
      <p className={defaultStyles.text_lable}>{label}</p>
    </div>
  )
}

export default OptionsInput
