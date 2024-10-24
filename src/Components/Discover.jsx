import React from 'react'
import { CiDollar } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { PiChartLineUpBold } from "react-icons/pi";
import { RiRadarFill } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiRobotGrab } from "react-icons/gi";
import { GiDna2 } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { LuPlane } from "react-icons/lu";








const Discover = () => {

    const data = [
        { id: 1, icon: <LuCircleDollarSign className='text-3xl text-blue-500 font-extrabold' />, title: 'Banking' },
        { id: 2, icon: <PiChartLineUpBold className='text-3xl text-blue-500 font-extrabold' />, title: 'Capital Markets' },
        { id: 3, icon: <RiRadarFill className='text-3xl text-blue-500 font-extrabold' />, title: 'Comminications, Media, and Information Services' },
        { id: 4, icon: <BsCart3 className='text-3xl text-blue-500 font-extrabold' />, title: 'Consumer Goods and Distribution' },
        { id: 5, icon: <FaChalkboardTeacher className='text-3xl text-blue-500 font-extrabold' />, title: 'Education' },
        { id: 5, icon: <RiRadarFill className='text-3xl text-blue-500 font-extrabold' />, title: 'Energy, Resources, and Utilities' },
        { id: 5, icon: <MdOutlineHealthAndSafety className='text-3xl text-blue-500 font-extrabold' />, title: 'Healthcare' },
        { id: 5, icon: <GiRobotGrab className='text-3xl text-blue-500 font-extrabold' />, title: 'High Tech' },
        { id: 5, icon: <LuCircleDollarSign className='text-3xl text-blue-500 font-extrabold' />, title: 'Insurance' },
        { id: 5, icon: <GiDna2 className='text-3xl text-blue-500 font-extrabold' />, title: 'Life Science' },
        { id: 5, icon: <GiRobotGrab className='text-3xl text-blue-500 font-extrabold' />, title: 'Manufacturing' },
        { id: 5, icon: <FaHandHoldingHeart className='text-3xl text-blue-500 font-extrabold' />, title: 'Public Services' },
        { id: 5, icon: <BsCart3 className='text-3xl text-blue-500 font-extrabold' />, title: 'Retail' },
        { id: 5, icon: <LuPlane className='text-3xl text-blue-500 font-extrabold' />, title: 'Travel and Logistics' },
    ]

    return (
        <div className=' xl:w-full w-[100dvw] px-10 bg-white dark:bg-[#1E2222] '>
            <h2 className=' text-3xl pt-5 text-black dark:text-white '>Select your industry. Discover our impact.</h2>
            <div className=' grid grid-cols-1 xl:grid-cols-2 gap-5 pt-8'>
                {data.map((item) => {
                    return (
                        <div className='group' key={item.id}>
                            <div className='flex gap-3 items-center xl:w-[100vh] relative py-3 border-b-2 border-b-gray-600 group-hover:border-b-black dark:group-hover:border-b-white transition-all duration-300 '>
                                {item.icon}
                                <p className=' font-[500] text-black dark:text-white '> {item.title} </p>
                                <FaArrowRight className=' text-black dark:text-white absolute right-5 opacity-0 group-hover:opacity-100 group-hover:right-0  transition-all duration-300  ' />
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Discover