import React from "react";
import styles from './home.module.css'

export default function HomeText() {
  return(
    <div className={styles['hometext-parent']}>
      <h2 className={styles['hometext-h2']}>Новая коллекция</h2>
      <p className={styles['hometext-p']}>Смотреть Новинки </p>
    </div>
  )
}