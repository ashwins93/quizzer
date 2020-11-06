import styles from '../styles/Home.module.css'
import React from 'react'
import MainMenu from '../components/main-menu'
import { useLocalStorage } from '../utils'

export default function Home() {
  const [questions] = useLocalStorage([], 'questions')
  const [selected, setSelected] = React.useState(0)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quizzer</h1>
      <MainMenu />
    </div>
  )
}
