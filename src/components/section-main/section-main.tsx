import styles from './section-main.module.scss'
import Image from 'next/image'
import Mountains from '@images/mountain-min.jpeg'
import MainInputMenu from './main-input-menu/main-input-menu'

const SectionMain = () => {
  return (
    <section className={styles.section}>
      <div className={`section__container ${styles.container}`}>
        <h1 className={styles.title}>
          Насладись прогулкой в горах с командой единомышленников
        </h1>
        <MainInputMenu />
      </div>
      <Image
        alt="Mountains"
        src={Mountains}
        placeholder="blur"
        quality={100}
        fill
        style={{ objectFit: 'cover', zIndex: 2 }}
      />
    </section>
  )
}

export default SectionMain
