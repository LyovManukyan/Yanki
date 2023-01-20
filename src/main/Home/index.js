import React from "react";
import Home from "./Home"
import Categories from "./Categories";
import KnowMore from "./KnowMore";

export default function HomeIndex(){
  return(
    <section>
      <Home/>
      <Categories/>
      <KnowMore/>
    </section>
  )
}