"use client";

import React from 'react'
import { useState } from 'react'
import { font } from './fonts/font'
import ContactModal from './ContactModal'

const Connect = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={`${font.className} flex flex-col  industry-gradient justify-center items-center p-12`}>
        <p className='text-customPurple text-xl md:text-3xl  text-center font-bold'>Like what you've seen?</p>
        <p className='md:text-7xl text-5xl mt-6 font-bold  max-w-5xl text-center text-white'>We’d Love to Hear from You. Let’s Talk!</p>
        <button onClick={openModal} className='btn-primary mt-10  bg-transparent text-white border-2 border-white hover:bg-black hover:text-white hover:bg-card1'>Let's Connect</button>
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}

export default Connect