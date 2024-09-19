import React from 'react';
import image from '../../assets/images/Rajan_imag-removebg-preview.png';
import './About.css';


const About = () => {
  return (
    <>
   <div className="container-lg about-section" id='About'>
   <div className="row about-container">
   
    <div className="col-md-4 about-image">
      <img src={image} className="img-fluid rounded-start image-pic " alt="..."/>
    </div>
    
    <div className="col-md-8">
      <div className="card-body-container">
        <h5 className="card-title">About Me</h5>
        <p className="card-about-text "> Hi, I’m Rajan Kumar Chaudhary from Darbhanga, Bihar. I completed my schooling at Surya Public School, Nangloi-Delhi, with an impressive grade of 86%, followed by my 12th from D.A.V. Public School, Darbhanga. I am a competitive and positive individual, driven to build a long and successful career in the tech industry.
        I have actively participated in several hackathons, where I gained valuable experience in time management, teamwork, and problem-solving. These experiences have shaped my ability to work efficiently under pressure and collaborate effectively in teams, skills that I aim to carry forward in my professional journey.
</p>
       
      </div>
    </div>
</div>
   </div>
    </>
  )
}

export default About;
