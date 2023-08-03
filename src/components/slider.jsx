import React, { useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

import Slide1 from "../assets/imgs/slides/slide1.jpg"
import Slide2 from "../assets/imgs/slides/slide2.jpg"
import Slide3 from "../assets/imgs/slides/slide3.jpg"
import Slide4 from "../assets/imgs/slides/slide4.jpg"
import Slide5 from "../assets/imgs/slides/slide5.jpg"

function Slider () {
    const slides = [
        {
            url: Slide1
        },    
        {
            url: Slide2
        }, 
        {
            url: Slide3
        }, 
        {
            url: Slide4
        },
        {
            url: Slide5
        },  
    ];

    const [ Index, setIndex ] = useState(0) 

    const prevSlide = () => {
        const isFirst = Index === 0;
        const newIndex = isFirst ? slides.length -1 : Index -1;
        setIndex(newIndex)
    }

    const nextSlide = () => {
        const isLast = Index === slides.length -1;
        const newIndex = isLast ? 0 : Index +1;
        setIndex(newIndex)
    }

    return(
        <div className="w-full h-80 relative">
            <div style={{backgroundImage: `url(${slides[Index].url})`}} className="w-full h-full bg-center bg-cover duration-500"></div>

            <div className="arrow-icon left-5">
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            <div className="arrow-icon right-5">
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
        </div>
        
    );
}

export default Slider;