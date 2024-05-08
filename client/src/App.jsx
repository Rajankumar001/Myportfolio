
import './App.css'
import Layout from './components/Layout/Layout'
import About from './pages/About/About';
import Tech from './pages/Tech/Tech';
import Project from './pages/Projects/Project.jsx';
import Education from './pages/Education/Education.jsx';
import Contact from './pages/Contact/Contact.jsx';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import Phonemenu from './components/PhoneMenu/Phonemenu.jsx';
function App() {
  
  return (
    <>
    <Phonemenu/>
     <Layout/>
     <div className="container body-container">
     <About/>
     <Education/>
     <Tech/>
     <Project />
     <Contact/>
     </div>
     <div className="container-lg footer-section">
      <div className="footer">
        <h2 className='footer-title'>Connect With Me Through ➡️ </h2>
        <div className="social-media-link">
          <a href="https://www.linkedin.com/in/rajan-kumar-chaudhary-0863aa1a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          < FaLinkedin />
          </a>
          <a href="https://github.com/Rajankumar001">
          <FaGithub />
          </a>
          <a href="https://www.instagram.com/chaudharyrajan387?utm_source=qr&igsh=NG5yOGNicW44MzAy">
           <FaInstagram />
          </a>
        </div>
      </div>
     </div>
   <ScrollToTop smooth />
    </>
  )
}

export default App
