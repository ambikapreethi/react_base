import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import { Home } from "../components/Home.js";
import { Blogs } from "../components/Blogs.js";
import { Nopage } from "../components/Nopage.js";
import "../styles/routes.css";
import { Contacts } from "../components/Contacts.js";
import { About } from "../components/About.js";
import UserProfilePage from "../components/UserProfilePage.js";
export default function Routerexample()
{
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="about" element={<About/>}></Route>
                <Route path="contacts" element={<Contacts/>}></Route>
                <Route path="blogs" element={<Blogs/>}></Route>
                <Route path="*" element={<Nopage/>}></Route>
                <Route path="/user/:userId" element={<UserProfilePage/>} /> 
            </Routes>
        </BrowserRouter>
        </div>
    )
}