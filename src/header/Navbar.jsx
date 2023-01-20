import React,{useState,useEffect} from "react";
import '../App.css'
import { NavLink,useLocation } from "react-router-dom";
import styled from "./header.module.css"
import { display } from "@mui/system";


function Navbar() {
    const location = useLocation()
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [display, setDisplay] = useState(false);
    // useEffect(() => {
    //   function getParametrers() {
    //     setWindowWidth(window.innerWidth);
    //   }
    //   window.addEventListener("resize", getParametrers);
    //   return () => window.removeEventListener("resize", getParametrers);
    // }, []);
    return (
        <div className={location.pathname =='/' ? styled['navbarWhite'] : styled.navbarDark}> 
            <ul className={styled['menu']}>
                <li>
                    <NavLink className={location.pathname =='/' ? styled['navbarWhite'] : styled.navbarDark} to='/'>
                        New
                    </NavLink>
                </li>
                <li>
                    <NavLink className={location.pathname =='/' ? styled['navbarWhite'] : styled.navbarDark} to='/catalog'>
                        КАТАЛОГ
                    </NavLink>
                </li>
                <li>
                    <NavLink className={location.pathname =='/' ? styled['navbarWhite'] : styled.navbarDark} to='/contact'>
                        О НАС   
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to='/blog'>
                        Blog
                    </NavLink>
                </li> */}
            </ul>
        </div>
    )
}
export default Navbar;