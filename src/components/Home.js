import React from "react";
import { Outlet,Link } from "react-router-dom";

export const Home=()=>
{
   return(
    <div>
         <p> <Link to="/about">About</Link></p>
         <p> <Link to="/range">Range</Link></p>
         <p> <Link to="/contacts">Contacts</Link></p>
         <p><Link to="/blogs">Blogs</Link></p>
         <p><Link to="/user/:userId">UserProfile</Link></p>
         <Outlet/>
    </div>
   )
}
