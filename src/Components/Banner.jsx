import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
        "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
        "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
        "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : currentSlide - 1);
    };

    return (
        <div className="w-full h-auto relative">
            <div className="w-full h-[650px] overflow-hidden">
                <div style={{transform:'trans;ateX(-${currentSlide * 100}vw}'}} className="flex transition-transform duration-1000">
                    {data.map((imageUrl, index) => (
                        <img
                            key={index}
                            className={`w-screen h-auto object-cover ${index === currentSlide ? '' : 'hidden'}`}
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-8 left-0 gap-5 right-0 flex justify-center">
                <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                    <HiArrowLeft />
                </div>
                <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                    <HiArrowRight />
                </div>
            </div>
        </div>
    );
};

export default Banner;
