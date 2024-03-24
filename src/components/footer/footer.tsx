import { FC } from 'react'
import styles from './footer.module.scss'

import TelegramSVG from '@images/footer/ic_baseline-telegram.svg'
import VkSVG from '@images/footer/entypo-social_vk-with-circle.svg'
import PrintSvg from '@images/footer/mdi_pinterest.svg'
import SkypeSvg from '@images/footer/mdi_skype.svg'
import FooterList from './footer-list/footer-list'
import { important, services } from '@/src/data/footer-data'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content_wrapper}>
        <div className={styles.footer_content}>
          <div className={styles.footer_about}>
            <div className={styles.footer_about_text_wrapper}>
              <h3 className={styles.footer_about_title}>Компания «РумТибет»</h3>
              <p className={styles.footer_about_text}>
                Его корни уходят в один фрагмент классической латыни 45 года
                н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                профессор латыни из колледжа Hampden-Sydney.
              </p>
            </div>
            <div className={styles.footer_contacts}>
              <p
                className={`${styles.footer_copyright_text} ${styles.footer_copyright_text_underline}`}
              >
                info@domain.com
              </p>
              <p
                className={`${styles.footer_copyright_text} ${styles.footer_copyright_text_underline}`}
              >
                +7 (123) 456-78-90
              </p>
            </div>
            <div className={styles.footer_socials}>
              <a href="#" className={styles.footer_socials_link}>
                <TelegramSVG className={styles.footer_socials_icon} />
              </a>
              <a href="#" className={styles.footer_socials_link}>
                <VkSVG className={styles.footer_socials_icon} />
              </a>
              <a href="#" className={styles.footer_socials_link}>
                <PrintSvg className={styles.footer_socials_icon} />
              </a>
              <a href="#" className={styles.footer_socials_link}>
                <SkypeSvg className={styles.footer_socials_icon} />
              </a>
            </div>
          </div>
          <FooterList data={services} />
          <FooterList data={important} />
        </div>
      </div>
      <div className={styles.footer_copyright_wrapper}>
        <div className={styles.footer_copyright}>
          <p className={styles.footer_copyright_text}>
            ИП Константинопольский К.К., 2023
          </p>
          <p
            className={`${styles.footer_copyright_text} ${styles.footer_copyright_text_underline}`}
          >
            Политика обработки персональных данных
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
