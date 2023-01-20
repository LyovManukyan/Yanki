import React from 'react'
import KnowMoreText from './KnowMoreText'
import KnowMoreButton from './KnowMoreButton'
import styles from './home.module.css'

export default function KnowMore() {
  return (
    <div className={styles.knowMore}>
    <div  className={styles.knowMoreChild}>
      <KnowMoreText/>
      <KnowMoreButton/>
    </div>
    </div>

  )
}
