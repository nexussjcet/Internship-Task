import React from "react";
import { useState,useEffect } from "react";
import Event1 from "../assets/event1.jpg"
import Event2 from "../assets/event2.jpg"
import Event3 from "../assets/event3.jpg"
import Event4 from "../assets/event4.jpg"

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [Event1,Event2,Event3,Event4];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div className="w-full relative overflow-hidden  rounded-2xl m-5 ">
                <div 
                    className="flex transition-transform duration-500 ease-in-out "
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className="w-full h-[500px] object-cover flex-shrink-0"
                            alt={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;
