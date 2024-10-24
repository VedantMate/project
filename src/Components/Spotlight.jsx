import React from 'react';
import spotlight1 from "../assets/spotlight1.jpeg";
import spotlight2 from "../assets/spotlight2.jpeg";
import spotlight3 from "../assets/spotlight3.jpeg";
import { LuNewspaper } from "react-icons/lu";

const Spotlight = () => {

    const data = [
        {
            title: "Stay up-to-date with the latest TCS news",
            tag: "Newsroom",
            image: spotlight1
        },
        {
            title: "Nuuday and TCS partner for cloud transformation",
            tag: "Press Release",
            image: spotlight2
        },
        {
            title: "Analyst recognize TCS as a cross-industry leader",
            tag: "Analyst Relations",
            image: spotlight3
        },
    ]

    return (
        <div className='bg-black xl:px-10 px-5 pt-5 pb-5 w-[100dvw] '>
            <h2 className='text-3xl text-white'>Spotlight on TCS</h2>
            <div className=' grid xl:grid-cols-3 grid-cols-1 gap-3 '>
                {data.map((item, index) => {
                    return (
                        <div className='group' key={index}>
                            <div className='relative xl:w-[450px] h-96 my-5 overflow-hidden'>
                                <img src={item.image} className='w-full h-full object-cover object-center brightness-75 group-hover:scale-125 transition-all duration-300 ' alt="Spotlight 1" />
                                <div className=' bg-gradient-to-b from-transparent  to-[rgba(0,0,0,0.7)] hover:to-[rgba(0,0,0,1)] transition-all duration-300 absolute top-0 flex flex-col h-full w-full justify-between left-0 p-4'>
                                    <p className=' bg-white rounded-xl w-fit py-1 px-1 text-center text-sm'> {item.tag} </p>
                                    <div className='mt-2'>
                                        <p className='text-white text-xl font-bold'> {item.title} </p>
                                        <p className='flex items-center text-sm tracking-[0.20em] text-white mt-2'>
                                            <LuNewspaper className='mr-2 text-lg' /> READ MORE
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    );
}

export default Spotlight;
