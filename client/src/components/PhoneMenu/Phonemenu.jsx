import React, { useState } from 'react';
import './Phonemenu.css';
import { FcHome,FcAbout,FcPortraitMode,FcReading } from "react-icons/fc";
import { CgWebsite } from "react-icons/cg";
import { GoProject } from "react-icons/go";
import { Link } from 'react-scroll';
import { IoIosContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
const Phonemenu = () => {
  const [open,setOpen]=useState(false);
  const handlleMenu=()=>{
    setOpen(!open);
  }
  const handleMenuclick=()=>{
    setOpen(!open);
  }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          <GiHamburgerMenu size={30} className='nav-icon' onClick={handlleMenu} />
          <span className='nav-title'>My portfolio</span>
        </div>
        {(open && 
 <div className="mobile-nav-menu">
 <div className="nav-items">
<div className="nav-item">
<div className="nav-link">
<Link to='Home' onClick={handleMenuclick}>
<FcHome />
Home

</Link>
</div>
</div>
<div className="nav-item">

<div className="nav-link">

<Link to='About' onClick={handleMenuclick}>
<FcAbout/>
About
</Link>

</div>
</div>

<div className="nav-item">
<div className="nav-link">
<Link to='Tech-stack' onClick={handleMenuclick}>
<CgWebsite/>
Tech stack
</Link>
</div>
</div>
<div className="nav-item">
<div className="nav-link">
<Link to='Education' onClick={handleMenuclick}>
<FcReading/>
Education
</Link>
</div>
</div>
<div className="nav-item">
<div className="nav-link">
<Link to='project' onClick={handleMenuclick}>
<GoProject/>
projects
</Link>
</div>
</div>
<div className="nav-item">
<div className="nav-link">
<Link to='contact' onClick={handleMenuclick}>
<IoIosContact/>
contact
</Link>
</div>
</div>
</div>
 </div>
        )}
       
        </div>
    </>
  )
}

export default Phonemenu
