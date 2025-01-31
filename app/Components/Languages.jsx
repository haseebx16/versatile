"use client";
import React from "react";
import Slider from "react-slick";
import {
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiMysql,
  SiCss3,
  SiJavascript,
  SiAngular,
} from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { font } from "./fonts/font";

const Languages = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const languages = [
    { name: "PHP", icon: <SiPhp className="text-blue-500" /> },
    { name: "React", icon: <SiReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Python", icon: <SiPython className="text-yellow-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Angular", icon: <SiAngular className="text-red-600" /> },
  ];

  return (
    <div className="py-10">
      <h2 className={`${font.className} text-customPurple text-center text-3xl font-bold mb-6`}>
        Our Tech-Stack
      </h2>
      <div className="container mx-auto px-6 pt-12">
        <Slider {...settings}>
          {languages.map((lang, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-black h-full">
              <div className="text-6xl flex justify-center">{lang.icon}</div>
              <p className={`${font.className} mt-2 text-lg font-semibold text-center`}>
                {lang.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Languages;
