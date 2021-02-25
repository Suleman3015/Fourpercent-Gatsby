import React from 'react'
import { Slide } from 'react-slideshow-image';
import { SlideData } from '../data/SlideData'
import 'react-slideshow-image/dist/styles.css'
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <Slide easing="ease"> 
                {SlideData.map((slides) => {
                    return (
                        <div className="each-slide">
                            <img src={slides.img} />
                        </div> 
                    )
                })} 
            </Slide> 
        </div>
    )
}

export default Hero;
