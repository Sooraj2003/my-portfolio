import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import SocialMedia from './SocialMedia';
import Popover from './Popover';

const ContactMe = () => {
    const [popover, setPopover] = useState({ show: false, message: '', type: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual email service ID, template ID, and user ID
    emailjs.send(
      'service_r7y9nqn', // e.g., 'gmail' 
      'template_c29lz9n', // e.g., 'template_xxxx'
      formData,
      '_ivJBl6CzSu5p3BGp' // e.g., 'user_XXXXXXX'
    ).then((result) => {
        setPopover({
            show: true,
            message: 'Message sent successfully!',
            type: 'success'
          });
      setFormData({
        name:"",
        email:"",
        message:""
      })
      setTimeout(() => {
        setPopover({ show: false, message: '', type: '' });
      }, 3000);
    }, (error) => {
      setPopover({
        show: true,
        message: 'Failed to send the message!',
        type: 'error'
      });
    });
  };
   

  return (
    <div id="contactMe" className="bg-purple-500 p-4 md:p-10  md:pl-20 scroll-mt-6">
         <h1 className="font-bold text-3xl md:text-6xl my-5 md:my-10 text-white">Contact Me.</h1>
    <form className="p-4 md:p-20 bg-purple-400 rounded-xl shadow-lg" onSubmit={handleSubmit}>
       
      <input 
      className="block w-full md:w-9/12 px-5 md:px-10 py-2 md:py-5 text-lg md:text-xl rounded-lg"
        type="text" 
        name="name" 
        placeholder="Your Name" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />
      <input 
      className="block w-full md:w-9/12 px-5 md:px-10 py-2 md:py-5 text-lg md:text-xl  my-3 md:my-10 rounded-lg"
        type="email" 
        name="email" 
        placeholder="Your Email" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
      <textarea 
      className="block w-full md:w-9/12 px-5 md:px-10 py-2 md:py-5 text-lg md:text-xl  rounded-lg"
        name="message" 
        placeholder="Your Message" 
        value={formData.message} 
        onChange={handleChange} 
        required 
      />
      <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="block mt-3 md:mt-10 w-full md:w-9/12 px-5 md:px-10 py-2 md:py-5 text-lg md:text-xl  rounded-lg bg-purple-500 text-white font-bold" type="submit">Send</motion.button>
    </form>
    <SocialMedia/>
    {popover.show && (
        <Popover 
          message={popover.message} 
          type={popover.type}
          onClose={() => setPopover({ show: false, message: '', type: '' })}
        />
      )}
    </div>
  );
};

export default ContactMe;
