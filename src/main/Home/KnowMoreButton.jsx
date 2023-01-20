import React from 'react'
import styles from './home.module.css'

export default function KnowMoreButton() {
  return (
    <div className={styles.KnowMoreButton}>
      <button>ПОДПИСАТЬСЯ</button>
      <p>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих <br /> персональных данных и ознакомлена с условиями конфиденциальности.
</p>
    </div>
  )
}
