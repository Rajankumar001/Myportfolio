import React from 'react';
import image from '../../assets/images/Rajan_imag-removebg-preview.png';
import './About.css';


const About = () => {
  return (
    <>
   <div className="container-lg about-section" id='About'>
   <div class="row about-container">
   
    <div class="col-md-4 about-image">
      <img src={image} class="img-fluid rounded-start image-pic " alt="..."/>
    </div>
    
    <div class="col-md-8">
      <div class="card-body-container">
        <h5 class="card-title">About Me</h5>
        <p class="card-about-text "> Hi,My self Rajan kumar chaudhary, I belong from bihar (Darbhanga) .I did my schooling from surya public school Nangloi-Delhi 
        with grade of 86% and completed my 12th from D.A.V public school Darbhanga (Bihar).I am competitive and positive person
        who have long and successful career in this industry and i also participated multiple hackathon that I got 
        lot of experience from there . Experience of time management,experience of Team work and experience of problem solving
        .
</p>
       
      </div>
    </div>
</div>
   </div>
    </>
  )
}

export default About;
