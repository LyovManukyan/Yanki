import React,{ useEffect,useState } from 'react'
import styles from './catalog.module.css'
import heart from './images/Heart.png'

export default function CatalogPictures() {
const  [catalog,setCatalog] = useState([])
// const  [favorit,setFavorit] = useState([])
 useEffect(()=>{
  fetch('https://retoolapi.dev/jPAA08/catalogPictures')
  .then(response=>response.json())
  .then(clots => setCatalog(clots))
  // .then(favior => setFavorit(favior))
 },[])
  return (
    <div className={styles.clots_main_parent}>
      {catalog.length && catalog.map((item)=>(
        <div key={item.id} className={styles.clots_parent}>
          <div className={styles.heart_parent}>
            <button className={styles.heart_button}>
            <img src={heart} alt="" />
            </button>
          </div>
          <img src={item.img} alt="" />
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.price}>{item.price}</p>
          <p className={styles.size}>{item.size}</p>
          <div className={styles.color_parent}>
          <div className={styles.color_white}></div>
          <div className={styles.color_blue}></div>
          <div className={styles.color_yellow}></div>
          </div>
          </div>
      ))}
    </div>
  )
}
