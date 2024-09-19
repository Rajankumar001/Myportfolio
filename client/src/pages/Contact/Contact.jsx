import React, { useState,useRef } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import contact_image from '../../assets/images/contact_img-removebg-preview.png';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = () => toast("message sent successfully");
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
     'service_vinhdp2',
     'template_63lwf09',
      form.current,
      '1NUZ3bk3UGBv6aPUr',
      )
    .then(
      (result) => {
        console.log(result.text);
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
    notify();
  };
  const [name, setName]=useState(" ");
  const [email ,setEmail]=useState(" ");
  const [message,setMessage]=useState(" ");


  
  return (
    <>
      <div className="container-lg contact-section" id='contact'>
      <h2 className='contact-title'>CONTACT US</h2>
        <div className="row contact-container">
            <div className="contact-image">
                <img src={contact_image} alt="" className='conatact_image_pic' />
            </div>
            <div class="mb-3 col-8 contact-form">
            <ToastContainer />  
            <form ref={form} onSubmit={sendEmail}>
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name " value={name} onChange={(e)=>setName(e.target.value)} name="user_name"/>
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com " value={email} onChange={(e)=>setEmail(e.target.value)} name="user_email" />
  <label for="exampleFormControlTextarea1" class="form-label">Message </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Drop a Message here!' value={message} onChange={(e)=>setMessage(e.target.value)} name="message"></textarea>
  <button className='btn btn-primary contact-button' >Send Message</button>
  </form>
</div>
        </div>
      </div>
    </>
  )
}

export default Contact
