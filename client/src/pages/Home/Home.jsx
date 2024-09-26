import React from 'react'
import './Home.css';
import Typewriter from 'typewriter-effect';
import pdf from '../../assets/docs/Resume rajan.pdf';

const Home = () => {
  return (
    <>
    <div className="container-fluid  home-container " id='Home'>
      <div className="conatiner home-content">
   <h3>Hi,👋I am Enthusiast about</h3>
   <h1>
   <Typewriter
  options={{
    strings: ['Web Developing', 'App Developing'],
    autoStart: true,
    loop: true,
  }}
/></h1>
<div className="home-buttons">
<a className='btn btn-hire' href='/contact'>Contact</a>
<a  className="btn btn-resume"href={pdf} download='Rajan_resume.pdf'>Resume</a>
</div>

    </div>
    </div>
    </>
  )
}

export default Home
