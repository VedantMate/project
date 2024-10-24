import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiPagesLine } from "react-icons/ri";
import "./hero.css"


import card1 from "../assets/card-1.jpeg"
import card2 from "../assets/card-2.jpeg"
import card3 from "../assets/card-3.jpeg"
import card4 from "../assets/card-4.jpeg"
import card5 from "../assets/card-5.jpeg"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
    {
        title: "A new, nimble NWC",
        subtitle: "Saudi Arabia’s National Water Company consolidates and transforms comprehensively",
        image: card1
    },
    {
        title: "Gaining Momentum with AI",
        subtitle: "South-African insurer Momentum Metropolitan delivers chatbot service automation and better CX",
        image: card2
    },
    {
        title: "Kautex kickstarts automation",
        subtitle: "German automotive supplier develops end-to-end software capability",
        image: card3
    },
    {
        title: "Colruyt's retail revitalized",
        subtitle: "TCS helps deliver on brand promise with next-gen pricing engine",
        image: card4
    },
    {
        title: "Tackling Takeda's revamp",
        subtitle: "Progressive pharma for patients, providers, payers",
        image: card5
    },
]

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function HeroSmallCarousel() {
    return (
        <div>
            <h3 className=' text-white mt-5 text-3xl xl:text-right text-center '>Transforming Business</h3>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                spaceBetween={50}
                keyboard={true}
                breakpoints={{
                    1280: {
                        slidesPerView: 3
                    },
                    0: {
                        slidesPerView: 1
                    }

                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper text-white w-full h-full"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className='text-center text-lg overflow-hidden flex justify-center items-center'>
                        <div className='overflow-hidden group'>
                            <img src={item.image} alt="" className='relative bg-cover brightness-50 group-hover:scale-150 transition-all duration-500 w-full h-full inline-block ' />
                            <div className='p-5 gap-5  flex flex-col items-start absolute bottom-0 left-0 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black'>
                                <h3 className='text-4xl text-start'>{item.title}</h3>
                                <p className='text-start w-4/5'>{item.subtitle}</p>
                                <p className='flex gap-2 items-center'><RiPagesLine /> READ MORE</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
