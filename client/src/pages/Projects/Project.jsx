import React from 'react';
import sportify from "../../assets/images/sportify_web.png";
import pinkaware from "../../assets/images/pinkaware_web.png";
import foodapp from "../../assets/images/food_app.png"
import './Project.css';
import Fade from 'react-reveal/Fade';
const project = () => {
  return (
    <>
    <Fade left duration ={1500}> 
      <div className="container-lg project-card" id='project'>
        <h2 className='project-title'>TOP 3 RECENT PROJECT</h2>
        <div className="row">
      <div class="card project-display">
  <img src={sportify} class="card-img-top card_image" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Sportify</h5>
    <p class="card-text">Through this web you can find your nearest buddy who want to play with you when you want</p>
    <a href="https://sportify-otzv.onrender.com/signup" class="btn btn-primary web-btn">View</a>
  </div>
</div>
<div class="card project-display">
  <img src={pinkaware} class="card-img-top card_image" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Pinkaware</h5>
    <p class="card-text">This web portal provides all the facilities for the Breast Cancer Patient</p>
    <a href="https://pinkaware.onrender.com/" class="btn btn-primary web-btn">View</a>
  </div>
</div>
<div class="card project-display">
  <img src={foodapp} class="card-img-top card_image todo_image" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Hungry Crowd</h5>
    <p class="card-text">At Hungry Crowd, we bring you the finest selection of sweets and snacks, high-quality treats that remind you of home.</p>
    <a href="https://food-app-wine-one.vercel.app/" class="btn btn-primary web-btn">view</a>
  </div>
</div>
</div>
      </div>
      </Fade>
    </>
  )
}

export default project
