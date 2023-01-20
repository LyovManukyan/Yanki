import React from "react";
import {Section} from '../MainTags.js'
import Yanki from "./Yanki";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Icons from "./Icons";
import { useLocation } from "react-router-dom";
import styled from "./header.module.css"

export default function Header(){
  const location = useLocation()
  return(
    <Section className={location.pathname =='/' ? styled['absolut'] : styled.absolutNot}>
      <Sidebar/>
      <Navbar/>
      <Yanki/>
      <Icons/>
    </Section>
  )
}