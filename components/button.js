import React from 'react'
import styles from '../styles/Home.module.css'

export default function Button({ children, ...props }) {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  )
}
