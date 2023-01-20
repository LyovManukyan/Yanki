import React from "react";
import styled from "./header.module.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLinknk,Link,useLocation } from "react-router-dom";

export default function Icons(){
    const location = useLocation()
  return(
    <div>
        <ul className={styled['menu2']}>
                <Link to='/Search'>
                    <SearchIcon className={location.pathname =='/' ? styled['navbarWhite'] : styled.iconsDarck} />
                </Link>
                <Link to='/Person'>
                    <PersonIcon className={location.pathname =='/' ? styled['navbarWhite'] : styled.iconsDarck} />
                </Link>
                <Link to='/Favorit'>
                    <FavoriteIcon className={location.pathname =='/' ? styled['navbarWhite'] : styled.iconsDarck} />
                </Link>
                <Link to='Shop'>
                    <ShoppingCartIcon className={location.pathname =='/' ? styled['navbarWhite'] : styled.iconsDarck} />
                </Link>
         </ul>
    </div>
  )
}