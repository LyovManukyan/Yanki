import React from "react";
import styled from "./header.module.css"
import { NavLink,Link,useLocation } from "react-router-dom";

export default function Yanki(){
  const location = useLocation()
  return(
    <div>
      <h1 className={location.pathname =='/' ? styled['yankiWhite'] : styled.yankiDark} to='/'>yanki</h1>
    </div>
  )
}