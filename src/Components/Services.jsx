import React, { useState } from 'react'
import services1 from "../assets/services1.png"
import services2 from "../assets/services2.jpeg"
import services3 from "../assets/services3.png"
import services4 from "../assets/services4.jpeg"
import services5 from "../assets/services5.jpeg"
import services6 from "../assets/services6.png"
import services7 from "../assets/services7.jpeg"
import services8 from "../assets/services8.jpeg"
import services9 from "../assets/services9.png"
import services10 from "../assets/services10.png"
import services11 from "../assets/services11.png"
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";


const Services = () => {

    const [visibleItems, setVisibleItems] = useState(4)

    const data = [
        {
            title: "Artificial Intelligence",
            image: services1
        },
        {
            title: "Cloud",
            image: services2
        },
        {
            title: "Cognitive Business Operations",
            image: services3
        },
        {
            title: "Consulting",
            image: services4
        },
        {
            title: "Cybersecurity",
            image: services5
        },
        {
            title: "Data & Analytics",
            image: services6
        },
        {
            title: "ENterprise Solutions",
            image: services7
        },
        {
            title: "IoT Digital Engineering",
            image: services8
        },
        {
            title: "Network Solution and Service",
            image: services9
        },
        {
            title: "Sustainability Service",
            image: services10
        },
        {
            title: "TCS Interactive",
            image: services11
        },
    ]

    return (
        <div className='pt-16 pb-4 w-[100dvw] px-10 bg-[#1E2222] '>
            <p className='uppercase font-bold text-white tracking-[0.25em]'>services</p>
            <h2 className='mt-16 text-4xl text-white'>Transform Your business with advanced technologies</h2>
            <div className='mt-12 grid grid-cols-1 xl:grid-cols-4 gap-4'>
                {data.slice(0, visibleItems).map((item, index) => {
                    return (
                        <div className='group mt-2' key={index}>
                            <div className='xl:w-[350px] w-full h-[350px] rounded-2xl relative overflow-hidden transition-all duration-300 transform group-hover:-translate-y-4'>
                                <img
                                    src={item.image}
                                    className='brightness-75 w-full h-full object-cover rounded-2xl   '
                                    alt=""
                                />
                                <div className='w-full h-full absolute bg-gradient-to-b group-hover:bg-gradient-to-t transform transition-all duration-300 from-transparent via-transparent to-[rgba(0,0,0,0.8)] top-0 left-0 rounded-2xl'>
                                    <p className=' text-white text-2xl font-[600] m-4 '> {item.title} </p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div>
                {visibleItems == 4 ? <button onClick={() => setVisibleItems(12)} className=' mx-auto w-40 h-14 rounded-xl my-5 text-white flex justify-center items-center gap-3 border-2 border-white '> View all topics <FaArrowDown /> </button> : <button onClick={() => setVisibleItems(4)} className=' mx-auto w-40 h-14 rounded-xl my-5 text-white flex justify-center items-center gap-3 border-2 border-white '> View less <FaArrowUp /> </button>}
            </div>
        </div>
    )
}

export default Services
