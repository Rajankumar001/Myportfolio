import React from 'react'
import profile from '../../assets/images/Rajan_imag.jpg';
import './Menu.css';
import { FcHome,FcAbout,FcPortraitMode,FcReading } from "react-icons/fc";
import { CgWebsite } from "react-icons/cg";
import { GoProject } from "react-icons/go";
import { Link } from 'react-scroll';
import { IoIosContact } from "react-icons/io";
import Zoom from 'react-reveal/Zoom';

const Menu = ({toggle}) => {
  return (
  <>
 {
    toggle?(
        <>
        <Zoom>
<div className="profile-pic">
    <img src={profile} alt="" />
  </div>
  </Zoom>
  <div className="nav-items">
  <div className="nav-item">
  <div className="nav-link">
 <Link to='Home'>
 <FcHome />
   Home
 </Link>
   </div>
  </div>
  <div className="nav-item">
  
  <div className="nav-link">
 
 <Link to='About'>
 <FcAbout/>
   About
 </Link>
 
   </div>
  </div>

  <div className="nav-item">
  <div className="nav-link">
  <Link to='Tech-stack'>
  <CgWebsite/>
  Tech stack
  </Link>
   </div>
  </div>
  <div className="nav-item">
  <div className="nav-link">
 <Link to='Education'>
 <FcReading/>
  Education
 </Link>
   </div>
  </div>
  <div className="nav-item">
  <div className="nav-link">
  <Link to='project'>
  <GoProject/>
  projects
  </Link>
   </div>
  </div>
  <div className="nav-item">
  <div className="nav-link">
  <Link to='contact'>
  <IoIosContact/>
  contact
  </Link>
   </div>
  </div>
</div>
  </>):(

<>
<div className="nav-items">
  <div className="nav-item">
  <div className="nav-link">
  <Link to='Home'>
  <FcHome/>
  </Link>
   </div>
  </div>
  <div className="nav-item">
  <div className="nav-link">
  
   <Link to='About'>
    <FcAbout/>
   </Link>
   </div>
  </div>

  <div className="nav-item">
  <div className="nav-link">
  
  <Link to='Tech-stack'>
  <CgWebsite/>
  </Link>
   </div>
  </div>
  <div className="nav-item">
  <div className="nav-link">
 
  <Link to='Education'> 
  <FcReading/>
  </Link>
   </div>
  </div>
  <div className="nav-item">
  <div className="nav-link">
 
  <Link to='project'> <GoProject/></Link>
   </div>
  </div>
  <div className="nav-item">
  <div className="nav-link">
  <Link to='contact'>
  <IoIosContact/>
  </Link>
   </div>
  </div>
</div>
</>


  )
 }
  </>
  )
}

export default Menu
