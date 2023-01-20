import React,{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import image from './images/Error404.png'
import { ErrSect } from '../../MainTags'


export default function WearsItem() {
  const {name,id} = useParams()
  const  [trench,setTrench] = useState({})
  const [error,setError] = useState('')
  useEffect(()=>{
   fetch(`http://localhost:3022/${name}/${id}`)
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
       (
         <div key={trench.id}>
          <img src={trench.image} alt=""/>
           <h2>{trench.title}</h2>
           </div>
       )}
     </div>
   )
}
