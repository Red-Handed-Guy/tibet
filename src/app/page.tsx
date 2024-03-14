'use client'
import styles from './page.module.scss'
import SectionMain from '../components/section-main/section-main'
import SectionAbout from '../components/section-about/section-about'
import { useEffect, useRef, useState } from 'react'

export default function Home() {

  return (
    <main>
      <SectionMain />
      <SectionAbout />
    </main>
  )
}
