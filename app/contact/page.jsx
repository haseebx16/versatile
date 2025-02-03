"use client"

import React from 'react'
import Header from '../Components/Navbar'
import { font } from '../Components/fonts/font'
import emailjs from "emailjs-com"
import { useState } from 'react'
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../Components/Footer'
import transition from '../transition'

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
            'service_vcvqcan', 
            'template_4ela61n',
            {
              from_name: name,
              to_email: 'support@coastalghostwriting.com',
              from_email: email,
              phone,
              message,
            },
            'TihDoLxcsdR_sDnwT'
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
      <div className="container mx-auto px-4 py-20  relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Text Content */}
          <div className="text-white max-w-2xl">
            <h2 data-aos="fade-down" className="font-oswald text-center text-lg md:text-xl mb-4 text-cards uppercase font-medium tracking-wider">
              <span className='text-customPurple'>Versatile Marketers</span> - Your Personal Unfair Advantage
            </h2>
            <h1 data-aos="fade-up" className="font-oswald text-4xl text-center md:text-6xl lg:text-6xl font-bold mb-6 tracking-wide">
              Contact Us We're Not Hard To Reach
            </h1>
          </div>
        </div>
      </div>
    </section>
    <div className={`${font.className} flex flex-col bg-white items-center md:items-center p-4`}>
          <h1
            data-aos="fade-right"
            className="text-3xl text-customPurple md:text-5xl text-center md:max-w-4xl font-bold p-4"
          >
            Connect with Us !
          </h1>

          <form
            onSubmit={handleSubmit}
            className="w-full mt-8 md:mt-0 max-w-lg md:max-w-2xl p-8 rounded-lg"
          >
            <div data-aos="fade-right" className="mb-4">
              <label
                htmlFor="name"
                className="block text-black font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div data-aos="fade-left" className="mb-4">
              <label
                htmlFor="email"
                className="block text-black font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div data-aos="fade-up-right" className="mb-4">
              <label
                htmlFor="phone"
                className="block text-black font-semibold"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div data-aos="fade-up-left" className="mb-4">
              <label
                htmlFor="message"
                className="block text-black font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              data-aos="flip-right"
              type="submit"
              className="w-full industry-gradient text-white font-semibold py-2 px-4 rounded-lg hover:bg-card1 hover:text-white duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        <p className="text-black max-w-xl mt-4"><span className="text-customPurple pt-4">Disclaimer:</span> By providing a telephone number and submitting the form you are consenting to be contacted by SMS text message & confirming that you're over 18. Message and data rates may apply. Reply STOP to opt out of further messaging. Visit <a href='/privacypolicy' className='text-customPurple underline'>Privacy Policy Page</a> for further knowledge.</p>

        </div>
        <Footer/>
    </div>
  )
}

export default transition(page)