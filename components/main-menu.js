import React from 'react'
import styles from '../styles/Home.module.css'
import Button from './button'

function MainMenu() {
  return (
    <div className={styles.main}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Button className={styles.btn}>New Question Set</Button>
        </li>
        <li className={styles.menuItem}>
          <Button className={styles.btn}>Load Question Set</Button>
        </li>
      </ul>
    </div>
  )
}

export default MainMenu
