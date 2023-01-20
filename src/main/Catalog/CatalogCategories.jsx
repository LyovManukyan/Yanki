import React,{ useEffect,useState } from 'react'
import styles from './catalog.module.css'
import { Link } from 'react-router-dom'

export default function CatalogCategories() {
  const  [categories,setCategories] = useState([])
  useEffect(()=>{
   fetch('https://retoolapi.dev/5wtipM/categories')
   .then(response=>response.json())
   .then(categories => setCategories(categories))
  },[])
   return (
     <div  className = {styles.categories_parent}>
       {categories.length && categories.map((item)=>(
         <div key={item.id}>
          <Link to = {`${item.name}`}>{item.categories}</Link>
           </div>
       ))}
     </div>
   )
}
