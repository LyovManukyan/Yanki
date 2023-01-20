import React from "react";
import styles from './home.module.css';
import slideItems from './homeSlide.json'

 export default function Categories() {
  return(
    <div className={styles.categories}>
        <h2>Категории</h2>
          <div className={styles.slide_parent}>
 {slideItems.map(item=>(
     <div key={item.id}>
      <img src={item.img} alt="" />
      <p>{item.name}</p>
      </div>
 ))}
    </div>
    </div>
  )  
}