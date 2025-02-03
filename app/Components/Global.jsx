"use client";

import React, { useEffect } from 'react'
import { font } from './fonts/font'
import AOS from "aos"
import "aos/dist/aos.css"

const Global = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

  return (
    <section className={`${font.className}`}>
        <div className='flex flex-col justify-center items-center p-16'>
            <p data-aos="fade-down" className='text-5xl text-customPurple mb-4 font-bold'>Global Reach</p>
            <p data-aos="fade-up" className='text-xl text-center max-w-2xl mb-12'>We offer custom development services to complement our customers technology stack and provide added guidance to streamline your business processes and workflow.</p>
            <img data-aos="flip-right" src='/map.webp'/>
        </div>
    </section>
  )
}

export default Global