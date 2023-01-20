import React from "react";
import { Outlet } from "react-router";

function Blog (){
    return(
        <div>
            blog
            <Outlet/>
        </div>
    )
}
export default Blog;