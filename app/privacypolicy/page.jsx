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
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Text Content */}
          <div className="text-white max-w-2xl">
            <h2 data-aos="fade-down" className="font-oswald text-lg md:text-xl mb-4 text-white uppercase font-medium tracking-wider">
              <span className='text-customPurple'>Versatile Marketers</span> - Your Personal Unfair Advantage
            </h2>
            <h1 data-aos="fade-up" className="font-oswald text-center  text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
    </section>
    <div className={`${font.className} flex flex-col bg-white items-center justify-center md:items-start p-4`}>
          <h1
            data-aos="fade-right"
            className="text-3xl text-customPurple md:text-3xl text-left md:max-w-4xl font-bold p-4"
          >
            Your Privacy, Our Commitment
          </h1>
          <p className="text-black leading-relaxed p-4">
                Versatile Marketers takes your privacy seriously. We are dedicated to protecting your personal data and using it responsibly. Our Consumer Data Policy ensures transparency and fosters trust, so you can engage with our services confidently.
                </p>
                <h2 className="text-4xl font-oswald text-customPurple p-4">
                Data Collection
                </h2>
                <p className="text-black leading-relaxed px-4">
                We collect only the information necessary to deliver our services, such as your name, contact details, and project-related information.
                </p>
                <h2 className="text-4xl font-oswald text-customPurple p-4">
                Data Usage
                </h2>
                <p className="text-black leading-relaxed px-4">
                Your data is used exclusively to provide services, communicate updates, and enhance your experience. We do not share your information without your consent.
                </p>
                <h2 className="text-4xl font-oswald text-customPurple p-4">
                Data Security
                </h2>
                <p className="text-black leading-relaxed px-4">
                Our systems are protected with industry-standard security measures. Regular audits ensure your information is safeguarded against unauthorized access.
                </p>
                <h2 className="text-4xl font-oswald text-customPurple  p-4">
                Your Rights
                </h2>
                <p className="text-black leading-relaxed px-4">
                You have the right to access, update, or request deletion of your data. Contact us to exercise your rights or address any concerns.
                </p>
                <h2 className="text-4xl font-oswald text-customPurple  p-4">
                Transparency
                </h2>
                <p className="text-black leading-relaxed px-4">
                We believe in open communication. Updates to this policy will be shared promptly, and we encourage you to review them periodically.
                </p>
                <h2 className="text-5xl font-oswald text-customPurple mb-6 p-4">
                    Privacy Policy: Collection Of Numbers And Use
                </h2>
                <h2 className="text-4xl font-oswald text-customPurple mb-6 px-4">
                1. Collection of Phone Numbers
                </h2>
                <p className="text-black leading-relaxed px-4">
                We collect phone numbers solely for the purposes of contact. This information is provided voluntarily by you with explicit consent at the time of collection.
                </p>
                <h2 className="text-4xl font-oswald text-customPurple p-4">
                2. Consent
                </h2>
                <p className="text-black leading-relaxed px-4">
                By providing your phone number, you consent to its use strictly for the purposes stated above. Consent is obtained through the Contact Form, and you may withdraw consent at any time by contacting us at <span className='text-customPurple'>info@versatilemarketers.com</span>.
                </p>
                <h2 className="text-4xl font-oswald text-customPurple  p-4">
                3. Third-Party Sharing
                </h2>
                <p className="text-black leading-relaxed px-4">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties
                </p>
                
                <h2 className="text-4xl font-oswald text-customPurple  p-4">
                4. Data Security
                </h2>
                <p className="text-black leading-relaxed px-4">
                Phone numbers are stored using industry-standard encryption and access controls. We retain this information only for as long as necessary to fulfill the stated purpose or as required by law.
                </p>
                <h2 className="text-4xl font-oswald text-customPurple p-4">
                5. Your Rights
                </h2>
                <p className="text-black leading-relaxed px-4">
                You may request access to, correction of, or deletion of your phone number from our systems by contacting <span className='text-customPurple'>info@versatilemarketers.com</span>.
                </p>
                <h2 className="text-4xl font-oswald text-customPurple  p-4">
                Example For Direct Use
                </h2>
                <p className="text-black leading-relaxed px-4">
                "We collect phone numbers solely to contact. Your phone number and consent will never be shared with third-party providers, advertisers, or external organizations unless explicitly required by law or to fulfill services you’ve requested (e.g., SMS delivery). All data is secured and retained only for as long as necessary. You may withdraw consent or request deletion at any time by contacting info@versatilemarketers.com."
                </p>
        </div>
        <Footer/>
    </div>
  )
}

export default page