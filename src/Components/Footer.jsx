// import React from 'react'
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa6";
// import { GrInstagram } from "react-icons/gr";
// import { ImLinkedin } from "react-icons/im";
// import logo from "../assets/tcs-logo-1.svg"


// const Footer = () => {

//     const data = [
//         {
//             icon: <FaFacebookF className=' text-white text-4xl ' />,
//             name: "FACEBOOK",
//             link: "TCS"
//         },
//         {
//             icon: <FaXTwitter className=' text-white text-4xl ' />,
//             name: "X",
//             link: "TCS"
//         },
//         {
//             icon: <FaYoutube className=' text-white text-4xl ' />,
//             name: "Youtube",
//             link: "tcsglobal"
//         },
//         {
//             icon: <GrInstagram className=' text-white text-4xl ' />,
//             name: "Instagram",
//             link: "tcsglobal"
//         },
//         {
//             icon: <ImLinkedin className=' text-white text-4xl ' />,
//             name: "Linkdin",
//             link: "TCS"
//         },
//     ]

//     let industries = [
//         { name: "Banking" },
//         { name: "Capital Markets" },
//         { name: "Consumer Goods and Distribution" },
//         { name: "Communications, Media, and Information Services" },
//         { name: "Education" },
//         { name: "Energy, Resources, and Utilities" },
//         { name: "Healthcare" },
//         { name: "High Tech" },
//         { name: "Insurance" },
//         { name: "Life Sciences" },
//         { name: "Manufacturing" },
//         { name: "Public Services" },
//         { name: "Retail" },
//         { name: "Travel and Logistics" }
//     ];

//     let services = [
//         { name: "Artificial Intelligence" },
//         { name: "Cloud" },
//         { name: "Cognitive Business Operations" },
//         { name: "Consulting" },
//         { name: "Cybersecurity" },
//         { name: "Data and Analytics" },
//         { name: "Enterprise Solutions" },
//         { name: "IoT and Digital Engineering" },
//         { name: "Sustainability Services" },
//         { name: "Network Solutions and Services" },
//         { name: "TCS Interactive" },
//         { name: "TCS and AWS Cloud" },
//         { name: "TCS Enterprise Cloud" },
//         { name: "TCS and Google Cloud" },
//         { name: "TCS and Microsoft Cloud" }
//     ];

//     let productsAndPlatforms = [
//         { name: "TCS ADD™" },
//         { name: "TCS BaNCS™" },
//         { name: "TCS BFSI Platforms" },
//         { name: "TCS CHROMA™" },
//         { name: "TCS Customer Intelligence & Insights™" },
//         { name: "TCS ERP on Cloud" },
//         { name: "ignio™" },
//         { name: "TCS HOBS™" },
//         { name: "TCS Intelligent Urban Exchange™" },
//         { name: "TCS OmniStore™" },
//         { name: "TCS Optumera™" },
//         { name: "TCS TAP™" },
//         { name: "Quartz™ – The Smart Ledgers™" },
//         { name: "TCS TwinX™" },
//         { name: "TCS MasterCraft™" },
//         { name: "Jile™" },
//         { name: "TCS iON™" }
//     ];

//     let insights = [
//         { name: "Customer Stories" },
//         { name: "Cloud" },
//         { name: "Blockchain" },
//         { name: "IoT" },
//         { name: "Metaverse" },
//         { name: "Future of Work" },
//         { name: "Health and Wellness" },
//         { name: "Sustainability" },
//         { name: "TCS.AI" },
//         { name: "Cybersecurity" },
//         { name: "Perspectives" }
//     ];

//     let moreinfo = [
//         { name: "Careers" },
//         { name: "Corporate Social Responsibility" },
//         { name: "Diversity, Equity, and Inclusion" },
//         { name: "Investor Relations" },
//         { name: "Sports Sponsorships" },
//         { name: "TCS Pace™" },
//         { name: "TCS Research" },
//         { name: "The TCS Way" },
//         { name: "Who we are" }
//     ];






//     return (
//         <>
//             <div className=' bg-[#1E2222] px-10 pt-20 pb-20 border-b-[1px] border-b-gray-600 '>
//                 <div className=' flex flex-col items-center '>
//                     <h3 className=' text-5xl text-white '>Join our team.</h3>
//                     <p className=' my-5 text-white '>Realize your potential.</p>
//                     <button className=' w-1/6 p-2 rounded-3xl text-white border-white border-2 '>Explore TCS careers</button>
//                 </div>
//                 <hr className=' bg-white mt-24 ' />

//                 <div className=' mt-10 '>
//                     <p className=' text-white text-[10px] tracking-[0.20em] '>SOCIAL</p>
//                     <h3 className=' text-3xl text-white '>Follow us for the latest updates</h3>
//                 </div>

//                 <div className=' flex justify-between mt-10 '>
//                     {data.map((item) => {
//                         return (
//                             <div className=' flex mt-5 items-center '>
//                                 {item.icon}
//                                 <div className=' text-white ml-2 '>
//                                     <p className=' text-[10px] tracking-[0.15em] uppercase '> {item.name} </p>
//                                     <p className=' text-md '> {item.link} </p>
//                                 </div>
//                             </div>
//                         )
//                     })}

//                 </div>
//             </div>
//             <div className=' bg-[#1E2222] px-10 pt-20 pb-10  '>
//                 <div className=' flex justify-around '>
//                     <div>
//                         <p className=' text-gray-300 text-md '>Industries</p>
//                         {industries.map((item) => {
//                             return (
//                                 <p className=' text-gray-300 text-[10px] my-4 '> {item.name} </p>
//                             )
//                         })}
//                     </div>
//                     <div>
//                         <p className=' text-gray-300 text-md '>Services</p>
//                         {services.map((item) => {
//                             return (
//                                 <p className=' text-gray-300 text-[10px] my-4 '> {item.name} </p>
//                             )
//                         })}
//                     </div>
//                     <div>
//                         <p className=' text-gray-300 text-md '>Products & Platforms</p>
//                         {productsAndPlatforms.map((item) => {
//                             return (
//                                 <p className=' text-gray-300 text-[10px] my-4 '> {item.name} </p>
//                             )
//                         })}
//                     </div>
//                     <div>
//                         <p className=' text-gray-300 text-md '>Insights</p>
//                         {insights.map((item) => {
//                             return (
//                                 <p className=' text-gray-300 text-[10px] my-4 '> {item.name} </p>
//                             )
//                         })}
//                         <p className=' text-gray-300 text-md mt-6 '>More Information</p>
//                         {moreinfo.map((item) => {
//                             return (
//                                 <p className=' text-gray-300 text-[10px] my-4 '> {item.name} </p>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//             <div className=' bg-black text-white h-28 px-10 flex justify-between items-center '>
//                 <div>
//                     <img src={logo} alt="" />
//                 </div>
//                 <div>
//                     <p className=' text-[9px] '>©2024 TATA Consultancy Services Limited</p>
//                     <ul className=' flex gap-4 text-[9px] '>
//                         <li>Privacy Notice</li>
//                         <li>Cookie Policy</li>
//                         <li>Disclaimer</li>
//                         <li>Security Policy</li>
//                         <li>California Notice at Collection</li>
//                     </ul>
//                 </div>
//                 <div className=' flex gap-5 text-white items-center '>
//                     <FaFacebookF />
//                     <FaYoutube />
//                     <FaXTwitter />
//                     <GrInstagram />
//                     <ImLinkedin />
//                     <label class="switch">
//                         <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
//                         <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
//                         <input type="checkbox" class="input" />
//                         <span class="slider"></span>
//                     </label>
//                 </div>

//             </div>
//         </>

//     )
// }

// export default Footer

import React, { useState, useEffect } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import logo from "../assets/tcs-logo-1.svg";

const Footer = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check system preference
    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            setIsDarkMode(true);
        }
    }, []);

    // Apply theme based on the switch state
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    const data = [
        {
            icon: <FaFacebookF className=' text-white text-4xl ' />,
            name: "FACEBOOK",
            link: "TCS"
        },
        {
            icon: <FaXTwitter className=' text-white text-4xl ' />,
            name: "X",
            link: "TCS"
        },
        {
            icon: <FaYoutube className=' text-white text-4xl ' />,
            name: "Youtube",
            link: "tcsglobal"
        },
        {
            icon: <GrInstagram className=' text-white text-4xl ' />,
            name: "Instagram",
            link: "tcsglobal"
        },
        {
            icon: <ImLinkedin className=' text-white text-4xl ' />,
            name: "Linkdin",
            link: "TCS"
        },
    ];

    let industries = [
        { name: "Banking" },
        { name: "Capital Markets" },
        { name: "Consumer Goods and Distribution" },
        { name: "Communications, Media, and Information Services" },
        { name: "Education" },
        { name: "Energy, Resources, and Utilities" },
        { name: "Healthcare" },
        { name: "High Tech" },
        { name: "Insurance" },
        { name: "Life Sciences" },
        { name: "Manufacturing" },
        { name: "Public Services" },
        { name: "Retail" },
        { name: "Travel and Logistics" }
    ];

    let services = [
        { name: "Artificial Intelligence" },
        { name: "Cloud" },
        { name: "Cognitive Business Operations" },
        { name: "Consulting" },
        { name: "Cybersecurity" },
        { name: "Data and Analytics" },
        { name: "Enterprise Solutions" },
        { name: "IoT and Digital Engineering" },
        { name: "Sustainability Services" },
        { name: "Network Solutions and Services" },
        { name: "TCS Interactive" },
        { name: "TCS and AWS Cloud" },
        { name: "TCS Enterprise Cloud" },
        { name: "TCS and Google Cloud" },
        { name: "TCS and Microsoft Cloud" }
    ];

    let productsAndPlatforms = [
        { name: "TCS ADD™" },
        { name: "TCS BaNCS™" },
        { name: "TCS BFSI Platforms" },
        { name: "TCS CHROMA™" },
        { name: "TCS Customer Intelligence & Insights™" },
        { name: "TCS ERP on Cloud" },
        { name: "ignio™" },
        { name: "TCS HOBS™" },
        { name: "TCS Intelligent Urban Exchange™" },
        { name: "TCS OmniStore™" },
        { name: "TCS Optumera™" },
        { name: "TCS TAP™" },
        { name: "Quartz™ – The Smart Ledgers™" },
        { name: "TCS TwinX™" },
        { name: "TCS MasterCraft™" },
        { name: "Jile™" },
        { name: "TCS iON™" }
    ];

    let insights = [
        { name: "Customer Stories" },
        { name: "Cloud" },
        { name: "Blockchain" },
        { name: "IoT" },
        { name: "Metaverse" },
        { name: "Future of Work" },
        { name: "Health and Wellness" },
        { name: "Sustainability" },
        { name: "TCS.AI" },
        { name: "Cybersecurity" },
        { name: "Perspectives" }
    ];

    let moreinfo = [
        { name: "Careers" },
        { name: "Corporate Social Responsibility" },
        { name: "Diversity, Equity, and Inclusion" },
        { name: "Investor Relations" },
        { name: "Sports Sponsorships" },
        { name: "TCS Pace™" },
        { name: "TCS Research" },
        { name: "The TCS Way" },
        { name: "Who we are" }
    ];

    return (
        <>
            <div className=' bg-[#1E2222] px-10 w-[100dvw] py-20 border-b-[1px] border-b-gray-600 '>
                <div className=' flex flex-col items-center '>
                    <h3 className=' xl:text-5xl text-3xl text-white '>Join our team.</h3>
                    <p className=' my-5 text-white '>Realize your potential.</p>
                    <button className=' xl:w-1/6 w-full p-2 rounded-3xl text-white border-white border-2 '>Explore TCS careers</button>
                </div>
                <hr className=' bg-white mt-24 ' />

                <div className=' mt-10 '>
                    <p className=' text-white text-[10px] tracking-[0.20em] '>SOCIAL</p>
                    <h3 className=' text-3xl text-white '>Follow us for the latest updates</h3>
                </div>

                <div className=' flex justify-between mt-10 '>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className=' flex mt-5 items-center '>
                                {item.icon}
                                <div className=' xl:inline-block hidden text-white ml-2 '>
                                    <p className=' text-[10px] tracking-[0.15em] uppercase '> {item.name} </p>
                                    <p className=' text-md '> {item.link} </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className=' xl:block hidden bg-[#1E2222] px-10 pt-20 pb-10  '>
                <div className=' flex justify-around '>
                    <div>
                        <p className=' text-gray-300 text-md '>Industries</p>
                        {industries.map((item, index) => {
                            return (
                                <p key={index} className=' text-gray-300 text-[10px] my-4 '> {item.name} </p>
                            );
                        })}
                    </div>
                    <div>
                        <p className=' text-gray-300 text-md '>Services</p>
                        {services.map((item, index) => {
                            return (
                                <p key={index} className=' text-gray-300 text-[10px] my-4 '> {item.name} </p>
                            );
                        })}
                    </div>
                    <div>
                        <p className=' text-gray-300 text-md '>Products & Platforms</p>
                        {productsAndPlatforms.map((item, index) => {
                            return (
                                <p key={index} className=' text-gray-300 text-[10px] my-4 '> {item.name} </p>
                            );
                        })}
                    </div>
                    <div>
                        <p className=' text-gray-300 text-md '>Insights</p>
                        {insights.map((item, index) => {
                            return (
                                <p key={index} className=' text-gray-300 text-[10px] my-4 '> {item.name} </p>
                            );
                        })}
                        <p className=' text-gray-300 text-md mt-6 '>More Information</p>
                        {moreinfo.map((item, index) => {
                            return (
                                <p key={index} className=' text-gray-300 text-[10px] my-4 '> {item.name} </p>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className=' bg-black text-white xl:h-28 px-10 flex xl:flex-row flex-col justify-between xl:items-center items-start '>
                <div className=' xl:block hidden '>
                    <img src={logo} alt="TCS Logo" />
                </div>
                <div className=' xl:hidden flex justify-between w-full my-5'>
                    <FaFacebookF />
                    <FaYoutube />
                    <FaXTwitter />
                    <GrInstagram />
                    <ImLinkedin />
                </div>
                <ul className='xl:hidden flex xl:flex-row flex-col gap-4 text-[12px] '>
                    <li>Privacy Notice</li>
                    <li>Cookie Policy</li>
                    <li>Disclaimer</li>
                    <li>Security Policy</li>
                    <li>California Notice at Collection</li>
                    <li>Customize Cookies</li>
                </ul>
                <label className="switch my-5 xl:hidden ">
                    <span className="sun">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="#ffd43b">
                                <circle r="5" cy="12" cx="12"></circle>
                                <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                            </g>
                        </svg>
                    </span>
                    <span className="moon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                        </svg>
                    </span>
                    <input type="checkbox" className="input" checked={isDarkMode} onChange={handleThemeToggle} />
                    <span className="slider"></span>
                </label>
                <p className=' xl:hidden  text-[12px] mt-5 '>©2024 TATA Consultancy Services Limited</p>
                <div className=' xl:block hidden '>
                    <p className=' text-[9px] '>©2024 TATA Consultancy Services Limited</p>
                    <ul className=' flex gap-4 text-[9px] '>
                        <li>Privacy Notice</li>
                        <li>Cookie Policy</li>
                        <li>Disclaimer</li>
                        <li>Security Policy</li>
                        <li>California Notice at Collection</li>
                    </ul>
                </div>
                <div className=' xl:flex hidden gap-5 text-white items-center '>
                    <FaFacebookF />
                    <FaYoutube />
                    <FaXTwitter />
                    <GrInstagram />
                    <ImLinkedin />
                    <label className="switch">
                        <span className="sun">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g fill="#ffd43b">
                                    <circle r="5" cy="12" cx="12"></circle>
                                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                                </g>
                            </svg>
                        </span>
                        <span className="moon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                            </svg>
                        </span>
                        <input type="checkbox" className="input" checked={isDarkMode} onChange={handleThemeToggle} />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </>
    );
};

export default Footer;
