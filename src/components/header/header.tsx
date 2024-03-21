'use client'
import { useEffect, useState } from 'react'
import Button from '../button/button'
import styles from './header.module.scss'
import Link from 'next/link'
import Logo from '@images/logo.svg'
import BurgerButton from './burger-button/burger-button'
import { navLinks } from '@/src/data/nav'
import SideNavMenu from '../side-nav-menu/side-nav-menu'
import useWindoWidth from '@/src/hooks/windowWidth'

const Header = () => {
  const [isScrollAtTop, setIsScrollAtTop] = useState(true)
  const [thisWindowWidth, setThisWindowWidth] = useState(1920)
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  const windowWidth = useWindoWidth()

  useEffect(() => {
    setThisWindowWidth(windowWidth)
    if (windowWidth > 1023) {
      setIsSideNavOpen(false)
    }
  }, [windowWidth])

  useEffect(() => {
    if (window.scrollY !== 0) {
      setIsScrollAtTop(false)
    }

    const checkScroll = () => {
      if (window.scrollY === 0) {
        setIsScrollAtTop(true)
      } else {
        setIsScrollAtTop(false)
      }
    }

    window.addEventListener('scroll', checkScroll)

    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const toggleBurgerButton = () => {
    setIsSideNavOpen(!isSideNavOpen)
  }

  return (
    <header
      className={`${styles.header} ${!isScrollAtTop && styles.header_scrolled}`}
    >
      <div className={styles.header_content}>
        <Logo className={styles.header_logo} />
        {thisWindowWidth >= 1100 && (
          <div className={styles.menu_nav_wrapper}>
            <nav className={styles.menu_nav}>
              <ul className={styles.menu_nav_list}>
                {navLinks.map(({ title, link }) => (
                  <li key={title}>
                    <Link className={styles.nav_link} href={link}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button text="Консультация" type="button_small" />
          </div>
        )}
        {thisWindowWidth < 1100 && (
          <BurgerButton onToggle={toggleBurgerButton} />
        )}
      </div>
      {thisWindowWidth < 1100 && (
        <SideNavMenu navLinks={navLinks} isOpen={isSideNavOpen} />
      )}
    </header>
  )
}

export default Header
