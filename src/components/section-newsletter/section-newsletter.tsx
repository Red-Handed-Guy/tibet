import { FC, useEffect, useRef, useState } from 'react'
import useObserver from '@/src/hooks/useObserver'
import TitleSubtitle from '../title-subtitle/title-subtitle'
import styles from './section-newsletter.module.scss'
import Button from '../button/button'

const SectionNewsLetter: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const isVisibleObsrver = useObserver(contentRef)

  useEffect(() => {
    if (isVisibleObsrver) {
      setIsVisible(true)
    }
  }, [isVisibleObsrver])

  return (
    <section ref={contentRef} className={styles.newsletter}>
      <div
        className={`section__container ${!isVisible && 'section__container_hidden'} ${styles.container}`}
      >
        <div className={styles.title_wrapper}>
          <TitleSubtitle
            alignItems="flex-start"
            subtitle="актуально"
            title="Получайте полезные рассылки о путешествиях"
            mini={true}
          />
        </div>
        <div className={styles.form_wrapper}>
          <p className={styles.lable}>Введите e-mail адрес</p>
          <form className={styles.form}>
            <input
              className={styles.form_input}
              type="text"
              placeholder="Email"
            />
            <div>
              <Button text={'Подписаться на новости'} type={'button_small'} />
            </div>
          </form>
          <p className={styles.offer}>
            подписываясь на новости, вы автоматически соглашаетесь с{' '}
            <span>условиями обработки персональных данных</span> и{' '}
            <span>правилами рекламных рассылок</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionNewsLetter
