import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
const WhatWeDo = () => {
    const [selectedTab, setSelectedTab] = useState('Overview');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const renderContent = () => {
        switch (selectedTab) {
            case 'Overview':
                return <Overview />;
            case 'Industries':
                return <Industries />;
            case 'Services':
                return <Services />;
            case 'Products and Platforms':
                return <ProductsAndPlatforms />;
            case 'Research & Innovations':
                return <ResearchAndInnovations />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className='w-[20%] '>
                {['Overview', 'Industries', 'Services', 'Products and Platforms', 'Research & Innovations'].map(tab => (
                    <div key={tab} className='group text-white cursor-pointer' onMouseEnter={() => setSelectedTab(tab)}>
                        <div
                            className={`flex w-full justify-between items-center h-16 border-b-2 ${selectedTab === tab ? 'border-b-white bg-gray-800' : 'border-b-gray-600'} group-hover:border-b-white group-hover:bg-gray-800`}
                            onClick={() => handleTabClick(tab)}
                        >
                            <p className={`text-xl ${selectedTab === tab ? 'text-white' : 'text-[#9E9FA3]'} group-hover:text-white`}>{tab}</p>
                            <FaChevronRight />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {renderContent()}
            </div>
        </>
    );
}

export default WhatWeDo

export const Overview = () => {
    return (
        <div className=' ml-10 text-white w-[80%] '>
            <h2 className=' text-4xl '>TCS is here to make a difference througn technology.</h2>
            <p className=' mt-5 leading-8 text-gray-400 font-[200] tracking-[0.15em] '>Leading the way in innovation for over 55 years, we build greater futures for businesses across multiple industries and 55 countries.</p>
            <button className=' border-2 border-white rounded-3xl px-5 py-3 mt-16 hover:underline '> Discover all solutions </button>
        </div>
    )
}
export const Industries = () => {
    return (
        <div className=' ml-10 text-white w-[80%] flex gap-28 '>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Banking</p>
                <p>Capital Markets</p>
                <p>Consumer Goods and Distribution</p>
                <p>Communications, Media, and Informational Services</p>
            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Education</p>
                <p>Energy, Resources, and Utilities</p>
                <p>Healthcare</p>
                <p>High Tech</p>
                <p>Insurance</p>
            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Life Science</p>
                <p>Manufacturing</p>
                <p>Public Services</p>
                <p>Retail</p>
                <p>Travel and Logistics</p>
            </div>
        </div>
    )
}
export const Services = () => {
    return (
        <div className=' ml-10 text-white w-[80%] flex gap-28 '>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Artificial Intelligence</p>
                <p>Cloud</p>
                <p>Cognitive Business Operations</p>
                <p>Consulting</p>
            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Cybersecurity</p>
                <p>Data and Analytics</p>
                <p>Enterprise Solutions</p>
                <p>IoT and Digital Engineering</p>
            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Network Solutions and Services</p>
                <p>TCS Interactive</p>
                <p>Sustainability Services</p>

            </div>
        </div>
    )
}
export const ProductsAndPlatforms = () => {
    return (
        <div className=' ml-10 text-white w-[80%] flex gap-28 '>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>TCS ADD<sup>TM</sup></p>
                <p>TCS BANCS<sup>TM</sup></p>
                <p>TCS BFSI Platforms</p>
                <p>TCS CHROMA<sup>TM</sup></p>
                <p>TCS Customer Intelligence & Insights<sup>TM</sup></p>
                <p>TCS ERP on Cloud</p>
            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>ignio<sup>TM</sup></p>
                <p>TCS iON<sup>TM</sup></p>
                <p>TCS HOBS<sup>TM</sup></p>
                <p>TCS Intelligent Urban Exchange<sup>TM</sup></p>
                <p>TCS OmniStore<sup>TM</sup></p>
                <p>TCS Optumera<sup>TM</sup></p>
            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>TCS Tap<sup>TM</sup></p>
                <p>Quartz<sup>TM</sup> - The Smart Ledgers<sup>TM</sup></p>
                <p>TCS Twinx<sup>TM</sup></p>
                <p>TCS MasterCraft<sup>TM</sup></p>
                <p>Jile<sup>TM</sup></p>
            </div>
        </div>
    )
}
export const ResearchAndInnovations = () => {
    return (
        <div className=' ml-10 text-white w-[80%] flex gap-28 '>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>TCS Research</p>
                <p>TCS Pace<sup>TM</sup></p>
            </div>
        </div>
    )
}