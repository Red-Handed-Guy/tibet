import styles from './side-nav-menu.module.scss'
import Link from 'next/link'
import { INavElement } from '@/types'
import { FC } from 'react'
import SvgArrow from '@images/nav-arrow.svg'
import React from 'react'

interface ISideNavMenu {
  navLinks: INavElement[]
  isOpen: boolean
}

const SideNavMenu: FC<ISideNavMenu> = React.memo(function SideNavMenu({
  navLinks,
  isOpen,
}) {
  return (
    <nav className={`${styles.side_nav} ${isOpen && styles.side_nav_opened}`}>
      <ul className={styles.nav_list}>
        {navLinks.map(({ title, link }) => (
          <li key={title} className={styles.nav_item}>
            <SvgArrow className={styles.nav_arrow} />
            <Link className={styles.nav_link} href={link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
})

export default SideNavMenu
