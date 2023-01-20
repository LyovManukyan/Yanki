import React from "react";
import HomeImg from "./HomeImg";
import HomeText from './HomeText'
import {Section1} from '../../MainTags'

export default function Home(){
  return(
    <Section1>
      <HomeImg/>
      <HomeText/>
    </Section1>
  )
}