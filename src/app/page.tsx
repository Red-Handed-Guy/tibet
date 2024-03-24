'use client'
import SectionMain from '../components/section-main/section-main'
import SectionAbout from '../components/section-about/section-about'
import SectionPrograms from '../components/section-programs/section-programs'
import SectionPopularWays from '../components/section-popular-ways/section-popular-ways'
import SectionTravelsBlog from '../components/section-travels-blog/section-travels-blog'
import SectionPhotoReport from '../components/section-photo-report/section-photo-report'
import SectionNewsLetter from '../components/section-newsletter/section-newsletter'

export default function Home() {
  return (
    <main>
      <SectionMain />
      <SectionAbout />
      <SectionPrograms />
      <SectionPopularWays />
      <SectionTravelsBlog />
      <SectionPhotoReport />
      <SectionNewsLetter />
    </main>
  )
}
