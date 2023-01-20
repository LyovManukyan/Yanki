import React from 'react'
import styles from './home.module.css'

export default function KnowMoreText() {
  return (
    <div className={styles.KnowMoreText}>
      <h2>Узнайте  первым о новинках</h2>
      <input type="text" placeholder='Ваш e-mail*'/>
    </div>
  )
}
