import React from "react";
import styled from "./header.module.css"
import { NavLink,Link,useLocation } from "react-router-dom";
export default function Sidebar(){
  const location = useLocation()
  return(
    <div className={styled['sidebar-parent']}>
    <div className={location.pathname =='/' ? styled['sidebar1White'] : styled.sidebar1Dark} to='/'></div>
    <div className={location.pathname =='/' ? styled['sidebar2White'] : styled.sidebar2Dark} to='/'></div>
    <div className={location.pathname =='/' ? styled['sidebar3White'] : styled.sidebar3Dark} to='/'></div>
</div>
  )
}