"use client"

import React from 'react'
import Header from '@/app/Components/Navbar'
import { font } from '@/app/Components/fonts/font'

import emailjs from "emailjs-com"
import { useState } from 'react'
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '@/app/Components/Footer'
import OurIndustry from '@/app/Components/OurIndustry'
import Development from '@/app/Components/Development'
import Connect from '@/app/Components/Connect'
import Global from '@/app/Components/Global'

const page = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        const { name, email, phone, message } = formData;
    
        if (!name || !email || !phone || !message) {
          alert("All fields are required!");
          setIsSubmitting(false);
          return;
        }
    
        emailjs
          .send(
            "service_zfdtt1k", // Replace with your EmailJS service ID
            "template_ssqyv8w", // Replace with your EmailJS template ID
            {
              name,
              email,
              phone,
              message,
            },
            "_09CMb0W-8XfBbNAC" // Replace with your EmailJS public key
          )
          .then(() => {
            alert("Your message was sent successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
            setIsSubmitting(false);
          })
          .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send the message. Please try again later.");
            setIsSubmitting(false);
          });
      };
    

  return (
    <div>
        <Header/>
       
    <section className={`${font.className} relative industry-gradient min-h-[18rem] p-12 overflow-hidden`}>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Text Content */}
          <div className="text-white text-center">
            <h2 className="font-oswald text-lg md:text-xl mb-4 text-cards uppercase font-medium tracking-wider">
              <span className='text-customPurple'>Versatile Marketers</span> - Your Personal Unfair Advantage
            </h2>
            <h1 className="font-oswald text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
              Android Development Services
            </h1>
          </div>
        </div>
      </div>
    </section>
    <div
      className={`${font.className} md:p-16 overflow-hidden bg-white p-8 flex flex-col md:flex-row md:justify-center md:items-center`}
    >
      <section className="md:w-[50%] w-[100%] z-20 md:mr-12 flex flex-col justify-center items-center">
      <div>
          <p className="md:text-5xl text-2xl uppercase text-customPurple">Hire the best Android Developers</p>
          <p className="text-3xl text-black font-bold mt-6">
          Transform Your Business with Top-Notch Development Skills - Hire the Best Android Developers Today
          </p>
          
        </div>
      </section>
      <section className="md:w-[50%] md:pt-0 pt-12 z-20 w-full">
        <div>
          
          <p className="text-md text-black mt-6">
          Are you in need of a skilled Android Developer or team to bring your android application to life? Look no further than <span className='text-customPurple'>Versatile Marketers.</span>
          </p>
          <a href="/contact"><button className="btn-primary border-2 border-black bg-transparent text-black hover:text-white hover:bg-black mt-6">
            Let's Connect
          </button></a>
        </div>
      </section>
    </div>
    <OurIndustry/>
    <Global/>
    <Connect/>
        <Footer/>
    </div>
  )
}

export default page