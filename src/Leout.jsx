import React from 'react'
import Header from './header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router'


export default function Leout() {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}
