import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Autoplay} from 'swiper'
import Slidderprops from './Slidderprops';
const data=[
    {
        text:"Text Sliders is a simple solution friendly.",
        img:"https://images.unsplash.com/photo-1554941068-d6fc6f388f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        text:"carousel slider, Post Text Slider Slider and so on.",
        img:"https://images.unsplash.com/photo-1554941426-a965fb2b9258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        text:"You can use it to  reviews, or show your post content.",
        img:"https://images.unsplash.com/photo-1554941426-e9604e34bc94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        text:"Users can click arrows to the toggle pause button to pause.",
        img:"https://images.unsplash.com/photo-1518972458649-b0f242a400ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        text:"Browse premium related images on iStock |.",
        img:"https://images.unsplash.com/photo-1554941829-fcef7b298d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, corrupti. ",
        img:"https://images.unsplash.com/photo-1554941068-15fe88d42c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80"
    },
]
const HeroSlidder = () => {
    return (
        <>
         
        <Swiper 
         spaceBetween={50}
         slidesPerView={1}
         autoplay= {
            {delay: 5000}
          }
          modules={[Autoplay]}

        >
             
        
            
            
            <SwiperSlide>
                <Slidderprops text={data[0].text} img={data[0].img} />
            </SwiperSlide>
            <SwiperSlide>
                <Slidderprops text={data[1].text} img={data[1].img} />
            </SwiperSlide>
            <SwiperSlide>
                <Slidderprops text={data[2].text} img={data[2].img} />
            </SwiperSlide>
            <SwiperSlide>
                <Slidderprops text={data[3].text} img={data[3].img} />
            </SwiperSlide>
            <SwiperSlide>
                <Slidderprops text={data[4].text} img={data[4].img} />
            </SwiperSlide>
            <SwiperSlide>
                <Slidderprops text={data[5].text} img={data[5].img} />
            </SwiperSlide> 
            
        </Swiper>
        </>
    )
}

export default HeroSlidder
