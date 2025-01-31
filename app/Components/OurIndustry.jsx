"use client";

import React from 'react'
import { font } from './fonts/font'
import { useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css"

const OurIndustry = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

  return (
    <div className={`${font.className} md:p-16 p-8 mt-8 z-10 flex industry-gradient flex-col md:flex-row md:justify-center md:items-center`}>
        <section className='md:w-[50%] w-full'>
            <div>
                <p data-aos="fade-right" className='md:text-3xl text-2xl uppercase text-customPurple font-bold'>Our Industry</p>
                <p data-aos="fade-up" className='text-md text-white mt-6'>At Versatile Marketers, we cater to enterprises of all kinds. There has been a demand for software developers in newer industries as of late, and we are here to take care of all your tech-based needs.</p>
                <p data-aos="fade-up" className='text-md text-white mt-6'><span className='text-cards'>&#x2022;</span>&nbsp; Access to Global talent.</p>
                <p data-aos="fade-up" className='text-md text-white mt-1'><span className='text-cards'>&#x2022;</span>&nbsp; Cost Effective.</p>
                <p data-aos="fade-up" className='text-md text-white mt-1'><span className='text-cards'>&#x2022;</span>&nbsp; Agility And Flexibility.</p>
            </div>
        </section>
        <section className='md:w-[50%] w-full'>
            <div>
                <div className='grid md:grid-cols-2 md:pl-12 mt-6 gap-4 '>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className='p-4 py-12 rounded-md bg-transparent shadow-md border-2 border-customPurple shadow-customPurple z-20 bg-card1 '>
                        <h1 className='text-2xl text-customPurple font-bold '>Web Development Industry</h1>
                        <p className='text-white pt-4'>We develop modern, scalable, and responsive websites for businesses using cutting-edge technologies.</p>
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000" className='p-4 py-12 rounded-md border-2 border-customPurple shadow-md shadow-customPurple z-20 bg-cards text-black hover:text-white duration-300'>
                        <h1 className='text-2xl font-bold text-customPurple text-justify'>Marketing Industry</h1>
                        <p className=' text-white pt-4'>We create data-driven marketing strategies to boost brand awareness, engagement, and conversions.</p>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000" className='p-4 py-12 border-2 border-customPurple rounded-md z-20 shadow-md shadow-customPurple text-black bg-cards hover:text-white duration-300'>
                        <h1 className='text-2xl text-customPurple font-bold text-justify'>Designing Industry</h1>
                        <p className='  text-white pt-4'>We craft visually stunning, user-friendly designs that enhance brand identity and engagement.</p>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1000" className='p-4 py-12 border-2 border-customPurple rounded-md shadow-md shadow-customPurple z-20 text-black bg-cards hover:text-white duration-300'>
                        <h1 className='text-2xl text-customPurple font-bold text-justify'>App Development Industry</h1>
                        <p className=' text-white pt-4'>We build scalable, high-performance mobile apps with seamless user experiences and modern technologies.</p>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default OurIndustry