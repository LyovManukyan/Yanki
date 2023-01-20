import React from 'react'
import styles from './catalog.module.css'
import { SectionCatalog } from '../../MainTags'
import { Link } from 'react-router-dom'

export default function CatalogText() {
  return (
    <div className={styles.CatalogText}>
      <SectionCatalog className={styles.CatalogText_div1}>
      <Link to={'/'}>Главная</Link>
      <span>{'>'}</span>
      <Link>Каталог</Link>
      </SectionCatalog>
      <SectionCatalog className={styles.CatalogText_div2}>
        <h3>Каталог</h3>
        <div>
        <select name="" id="">
          <option value="">Размер</option>
          <option value="">S</option>
          <option value="">M</option>
          <option value="">L</option>
        </select>
        <select name="" id="">
          <option value="">Цвет</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="">
          <option value="">Цена</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="">
          <option value="">Сортировать по</option>
          <option value="">Размер</option>
          <option value="">Цвет</option>
          <option value="">Цена</option>
        </select>
        </div>
      </SectionCatalog>
    </div>
  )
}
