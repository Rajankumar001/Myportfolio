import React, { useState } from 'react'
import Home from '../../pages/Home/Home';
import './Layout.css';
import { AiOutlineDoubleLeft ,AiOutlineDoubleRight } from "react-icons/ai";
import Menu from '../Menus/Menu';
const Layout = () => {
  const [toggle,setToggle]=useState(false);
  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (
    <div className="sidebar-section">
        <div className={toggle? " sidebar sidebar-toggle":'sidebar'}>
            <div className="sidebar-toggle-icon">
          
             <p onClick={handleToggle}>
           {
            toggle?(<AiOutlineDoubleRight size={40}/> ):(<AiOutlineDoubleLeft size={40}/>)
           }
             </p>
            
            </div>
      <Menu toggle={toggle}/>
        </div>
        <div className="container">
          <Home/>
        </div>
    </div>
  )
}

export default Layout
