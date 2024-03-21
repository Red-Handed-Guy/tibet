'use client'
import styles from './page.module.scss'
import SectionMain from '../components/section-main/section-main'
import SectionAbout from '../components/section-about/section-about'
import SectionPrograms from '../components/section-programs/section-programs'
import SectionPopularWays from '../components/section-popular-ways/section-popular-ways'

export default function Home() {
  return (
    <main>
      <SectionMain />
      <SectionAbout />
      <SectionPrograms />
      <SectionPopularWays />
    </main>
  )
}
