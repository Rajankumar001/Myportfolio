import React, { useState } from 'react'
import './Contact.css';
import contact_image from '../../assets/images/contact_img.jpg';
import Axios from 'axios';
const Contact = () => {
  const [name, setName]=useState(" ");
  const [email ,setEmail]=useState(" ");
  const [message,setMessage]=useState(" ");
  const handleform = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
        console.log("Please fill all required fields");
        return;
    }
    try {
      console.log("its working");
        const res = await Axios.post('http://localhost:8080/portfolio/sendEmail', { name, email, message }).then((res)=>{
          console.log("message saved..",res.data);
        }).catch((e)=>{
          console.log(
            "error caught",e
          )
        })
        console.log('its worked');
        setName("");
        setEmail("");
        setMessage("");
      }
        catch (error) {
        console.log("Error caught:", error);
    }
}

  
  return (
    <>
      <div className="container-lg contact-section" id='contact'>
      <h2 className='contact-title'>CONTACT US</h2>
        <div className="row contact-container">
            <div className="contact-image">
                <img src={contact_image} alt="" className='conatact_image_pic' />
            </div>
            <div class="mb-3 col-8 contact-form">
             
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name " value={name} onChange={(e)=>setName(e.target.value)}/>
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com " value={email} onChange={(e)=>setEmail(e.target.value)}/>
  <label for="exampleFormControlTextarea1" class="form-label">Message </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Drop a Message here!' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
  <button className='btn btn-primary contact-button' onClick={handleform}>Send Message</button>
 
</div>
        </div>
      </div>
    </>
  )
}

export default Contact
