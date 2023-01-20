import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import { ErrSect } from '../../MainTags'
import image from './images/Error404.png'

export default function Wears() {
  const {name} = useParams()
  const  [trench,setTrench] = useState([])
  const [error,setError] = useState('')
  useEffect(()=>{
   fetch(`http://localhost:3022/${name}`)
   .then(response=>{
    if(response.ok){
      return response.json()
    }else{
      return Promise.reject('sxal')
    }
  })
   .then(clots => setTrench(clots))
   .catch(err=>setError(err))
  },[])
   return (
     <div>
       {error ? <ErrSect><img src={image} alt="" /></ErrSect>:
       trench.length && trench.map((item)=>(
         <div key={item.id}>
           <Link to={`${item.id}`}><img src={item.image} alt=""/></Link>
           <h2>{item.title}</h2>
           </div>
       ))}
     </div>
   )
}
