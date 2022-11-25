import Link from 'next/link'
import React from 'react'
import styles from '../styles/NavBar.module.scss'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Live Election Dashboard</Link>
          </li>
          <li>
            <Link href="/charts/party">
              Score for each party
            </Link>
          </li>
          <li>
            <Link href="/InfoCandidate">
              Candidate Information
            </Link>
            
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
