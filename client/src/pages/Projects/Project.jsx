import React from 'react';
import sportify from "../../assets/images/sportify_web.png";
import pinkaware from "../../assets/images/pinkaware_web.png";
import Todoapp from "../../assets/images/Project_3.png"
import './Project.css';
import Fade from 'react-reveal/Fade';
const project = () => {
  return (
    <>
    <Fade left>
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
  <img src={Todoapp} class="card-img-top card_image todo_image" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Todoapp</h5>
    <p class="card-text">This Web portal is designed by the help of fronted and backend ,Here you can add,update and Delete Item according to your choice</p>
    <a href="#" class="btn btn-primary web-btn">View</a>
  </div>
</div>
</div>
      </div>
      </Fade>
    </>
  )
}

export default project
