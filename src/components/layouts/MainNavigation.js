import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new-meetup">New</Link></li>
          <li><Link to="/favourites">Favourite</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
