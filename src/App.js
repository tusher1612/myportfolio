import styled from "styled-components";
import {useState,useEffect} from 'react';
import React from "react";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AboutPage from"./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import PortfoliosPage from "./pages/PortfoliosPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import{Route,Routes} from "react-router-dom";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Switch } from "@material-ui/core";



function App() {
const [theme,setTheme]=useState('dark-theme');
const [checked,setChecked]=useState(false);
const [navToggle,setNavToggle]=useState(false);
useEffect(() => {
    document.documentElement.className=theme;
}, [theme])

const themeToggler=()=>{
if(theme==='light-theme'){
    setTheme('dark-theme');
    setChecked(false)
}
else {
    setTheme('light-theme');
    setChecked(true)
}

}

    return (
        <div className="App">
        <Sidebar navToggle={navToggle}/>
        <div className="light-dark-mode">
        <div className="left-content">
          <Brightness4Icon/>
        </div>
        <div className="right-content">
         <Switch  size="medium" checked={checked} onClick={themeToggler}/>

        </div>
        </div>
     <div className="ham-burger-menu">
       <IconButton onClick={()=>setNavToggle(!navToggle)}>
       <MenuIcon/>
       </IconButton>
     </div>

        <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/portfolios" element={<PortfoliosPage />} />
        <Route exact path="/resume" element={<ResumePage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
       
        </MainContentStyled>
        </div>
    )
}
       const MainContentStyled=styled.main`
       position: relative;
       margin-left:16.3rem;
       min-height:100vh;
      
       @media screen and (max-width:1200px){
         margin-left:0;
          }

       .lines {
           position: absolute;
           min-height: 100%;
           width: 100%;
           display: flex;
           justify-content: space-evenly;
           z-index:-1;
           
           .line-1,.line-2, .line-3, .line-4 {
               width: .2px;
               min-height: 100vh;
               background-color: var(--border-color);
           }
       }
     
       `;

export default App;