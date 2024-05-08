import React from 'react';
import { Techstack } from '../../utils/Techstack';
import './Tech.css';
import Fade from 'react-reveal/Fade';
const Tech = () => {
  return (
    <>
    <div className="container-lg tech-section" id='Tech-stack'>
      <h2 className='Tech-title'>TECH SATCK</h2>
      <Fade left>
    <div className="row">
  {
   
   Techstack.map((curr) => (
    <div className="col-md-3 box">
      <curr.icons/>
<h5>
  {curr.name}
</h5>
    </div>
   
   ))
  
   
  }
   </div>
   </Fade>
</div>
 </>
  )
}

export default Tech;
