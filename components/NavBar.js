import Link from 'next/link'
import React from 'react'
import styles from '../styles/NavBar.module.scss'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/party">
              Party
            </Link>
          </li>
          <li>
            <Link href="/candidate">
              Candidate
            </Link>
            
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
