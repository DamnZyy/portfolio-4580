'use client'
import React, { useState, useEffect, useRef } from 'react';

import fb1 from '@/images/logo/facebook.png';
import fb2 from '@/images/logo/github.png';
import fb3 from '@/images/logo/instagram.png';
import fb4 from '@/images/logo/twitter.png';

import Cat from '@/images/Cat.png'

import { SiMysql, SiTailwindcss } from "react-icons/si";
import { FaReact, FaGitAlt, FaGithub, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaBars} from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function page() {

    const [showShadow, setShowShadow] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
    function handleScroll() {
        if (window.scrollY > 0) {
            setShowShadow(true);
        } else {
            setShowShadow(false);
        }
    }
        window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
      useEffect(() => {
        AOS.init({ once: true });
      }, [])
    const Menubar = () => {
        setShowNavbar(!showNavbar);
    }
    
    return(
        <div className='select-none snap-none bg-default'>
            <nav className={`w-full py-3 px-2 z-50 fixed bg-default transition-all ${showShadow ? (showNavbar ? "" : "shadow-xl") : ''}`}>
                <div className="flex relative justify-between max-w-7xl m-auto p-3">
                    <span className='text-lg font-semibold flex items-center'>
                        <span className='tracking-widest'>Xy</span>
                        <span className='tracking-widest text-danger'>lar</span>
                    </span>
                    <ul className='bg-default justify-center items-center gap-11 text-lg hidden md:flex'>
                        <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' })}}>Home</li>
                        <li onClick={() => { aboutRef.current?.scrollIntoView({behavior: 'smooth' })}}>About</li>
                        <li onClick={() => { const element = serviceRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 50;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>Services</li>
                        <li onClick={() => { const element = portfolioRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 50;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>Portfolio</li>
                    </ul>
                    <div className='flex justify-center items-center'>
                        <button className={`hidden md:flex border-[1px] rounded-full px-6 py-1 hover:bg-black hover:text-white hover:shadow-md border-black transition-all`} onClick={() => contactRef.current?.scrollIntoView({behavior: 'smooth', block: 'end' })}>Let's talk</button>
                        <button className="block md:hidden" onClick={Menubar}>
                            <FaBars className="h-6"/>
                        </button>
                    </div>
                </div>
            </nav>

            <ul className={`bg-primary z-10 fixed flex flex-col shadow-xl justify-center items-center gap-11 text-lg py-10 mt-14 left-0 w-screen md:w-0 md:flex md:py-0 md:mt-0 md:relative md:justify-center md:flex-row -translate-y-0 transition-all  ${showNavbar ? "-translate-y-0 " : "-translate-y-[21rem]"}`}>
                <li onClick={() => {Menubar(); window.scrollTo({ top: 0, behavior: 'smooth' })}}>Home</li>
                <li onClick={() => {Menubar(); aboutRef.current?.scrollIntoView({behavior: 'smooth' })}}>About</li>
                <li onClick={() => {Menubar(); const element = serviceRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 100;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>Services</li>
                <li onClick={() => {Menubar(); const element = portfolioRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 50;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>Portfolio</li>
            </ul>

            <section className={`max-w-7xl m-auto py-32  grid grid-cols-1 gap-10 relative xl:grid-cols-2 xl:gap-1`}>

                <div className='flex flex-col justify-center items-center gap-5 leading-none xl:items-start' data-aos="fade-right" data-aos-duration="1500">
                    <div className='font-bold text-2xl sm:text-5xl text-center xl:text-start'>Front-End Developer <br /> <p className='pt-1'>Crafting Digital Solutions</p></div>
                    <div className='flex items-center gap-8 font-semibold text-md sm:text-xl'>
                        <p>DESIGN</p> <p>DEVELOPMENT</p> <p>WEBFLOW</p>
                    </div>
                    <div className=''>
                        <p className='text-xl text-center xl:text-start mx-5 m-auto xl:m-0'>Hi, I'm <span className='font-semibold'>Jessie Bartolome</span>. I turn ideas into reality with expertise in <span className='font-semibold'>React, Node.js, MongoDB</span>, and more. Explore my portfolio for a glimpse into my coding journey.</p>
                    </div>
                    <div className='pt-3'>
                        <button className="flex justify-center items-center gap-2 tracking-wide border-2 rounded-full px-6 py-3 hover:shadow-xl border-black bg-black text-white transition-all" onClick={() => aboutRef.current?.scrollIntoView({behavior: 'smooth' })}>Learn more &rarr; {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg> */}</button>
                    </div>
                </div>

                <div className='mx-10 sm:m-0 m-auto flex justify-center items-center relative order-first xl:order-last' data-aos="fade-left" data-aos-duration="1500">
                    <img src={Cat} alt="image" className={`rounded-full w-[500px] border-8 p-1 border-black shadow-block`} />
                </div>
            </section>


            <section className='flex max-w-7xl m-auto flex-col'>
                <div className='flex pt-10 sm:pt-32 flex-col xl:flex-row'  ref={aboutRef}>
                    <div className='basis-2/5 xl:pl-10 relative ' data-aos="zoom-in-up">
                        <p className='text-xl py-4 text-center xl:text-left'>Jessie Bartolome</p>
                        <p className='font-bold text-4xl sm:text-5xl xl:pr-32 text-center xl:text-left leading-12'>Leading Web Development and Design.</p>
                        <span className={`w-24 h-24 left-64 bottom-52 absolute transition-all rounded-full blur-99 bg-black`}></span>
                    </div>
                    <div className='basis-1/2 relative m-3 xl:m-10' data-aos="zoom-in-up">
                        <p className='font-semibold text-xl sm:text-2xl text-center xl:text-left'>Passionate Front-End Developer with a mission to craft digital experiences that not only meet but exceed expectations.</p>
                        <p className='text-gray-500 mt-5 text-center xl:text-left'>With a love for the front-end realms of web development, I embark on a journey to bring ideas to life through code.</p>
                        <span className={`w-20 h-20 blob-10 absolute transition-all rounded-full blur-99 bg-black`}></span>
                        <div className='pt-10 grid grid-cols-1 gap-10 md:grid-cols-3'>
                            <div className='text-center xl:text-left'>
                                <span className='font-semibold text-sm'>BASED IN</span>
                                <p className='font-bold text-2xl pt-1'>Philippines</p>
                            </div>

                            <div className='text-center xl:text-left'>
                                <span className='font-semibold text-sm'>EXPERIENCE</span>
                                <p className='font-bold text-2xl pt-1'>2+ years</p>
                            </div>

                            <div className='text-center xl:text-left'>
                                <span className='font-semibold text-sm'>SPECIALIZATION</span>
                                <p className='font-bold text-2xl pt-1'>Development</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-20 mb-36' data-aos="zoom-in-up">
                    <table>
                        <tr className='hidden xl:block'>
                            <td className={`border-[1px] px-24 py-1 text-xl border-black`}>
                                <div className='flex flex-col items-center justify-center'>
                                    <p className=' font-bold text-6xl mb-2'>2+</p>
                                    <p className='font-semibold'>YEARS OF EXPERIENCE</p>
                                </div>
                            </td>
                            <td className={`border-[1px] px-24 py-9 text-xl bg-black border-black`}>
                                <div className={`flex flex-col items-center justify-center text-light`}>
                                    <p className=' font-bold text-6xl mb-2'>30+</p>
                                    <p className='font-semibold'>PROJECT COMPLETED</p>
                                </div>
                            </td>
                            <td className={`border-[1px] px-24 py-1 text-xl border-black`}>
                                <div className='flex flex-col items-center justify-center relative'>
                                    <p className=' font-bold text-6xl mb-2'>20+</p>
                                    <p className='font-semibold'>HAPPY CLIENTS</p>
                                    <span className={`w-24 h-24 left-28 top-28 absolute transition-all rounded-full blur-99 bg-black`}></span>
                                </div>
                            </td>
                        </tr>
                        <tbody className='block xl:hidden m-5 sm:m-5 md:m-5 xl:m-0'>
                            <tr>
                                <td className={`border-2 px-24 py-9 text-xl border-black`}>
                                    <div className='flex flex-col items-center justify-center text-center'>
                                        <p className=' font-bold text-6xl mb-2'>2+</p>
                                        <p className='font-semibold'>YEARS OF EXPERIENCE</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className={`border-2 md:px-80 xl:px-24 py-9 text-xl bg-black border-black`}>
                                    <div className={`flex flex-col items-center justify-center text-default text-center`}>
                                        <p className=' font-bold text-6xl mb-2'>30+</p>
                                        <p className='font-semibold'>PROJECT COMPLETED</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className={`border-2 px-24 py-9 text-xl border-black`}>
                                    <div className='flex flex-col items-center justify-center text-center relative'>
                                        <p className=' font-bold text-6xl mb-2'>20+</p>
                                        <p className='font-semibold'>HAPPY CLIENTS</p>
                                        <span className={`w-24 h-24 left-28 top-28 absolute transition-all rounded-full blur-99 bg-black`}></span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='flex flex-col mx-10 py-5 sm:py-20  xl:mx-0 xl:flex-row' ref={serviceRef}>
                    <div className='basis-2/4 xl:pl-10 relative' data-aos="zoom-in-up">
                        <p className='text-xl text-center xl:text-left'>What i Offer</p>
                        <p className='font-semibold text-4xl pt-1 text-center xl:text-left'>Design, Development <br /> and Content. All in one.</p>
                        <p className='py-7 text-center xl:pr-36 xl:text-left'>Unifying the Essence of Design, Development, and Compelling Content to Forge a Singular, Powerful Digital Experience.</p>
                        <span className='blob3'></span>
                    </div>

                    <div className='basis-1/2 flex gap-5 flex-col' data-aos="zoom-in-up">
                        <Offer number="01" title="Web design" description="Tailored to individual client sepecifications, our high-end web design services deliver visually captivating and intuitive websites, ensuring impactful outcomes."></Offer>
                        <Offer number="02" title="Web Development" description="Striking and functional websites, powered by Webflow. Easily customizable and manageable, no prior web development experience required."></Offer>
                        <Offer number="03" title="Content" description="Full-service solutions for businesses to strengthen their online presence. Quality, engaging content that boosts conversions, optimized for search engines."></Offer>
                    </div>
                </div>

                <div className='py-20'>
                    <div className='text-center' data-aos="zoom-in-up">
                        <p className='text-5xl font-semibold'>Technology Stacks</p>
                        <p className='mt-5 mx-10 sm:mx-0'>Here's a glimpse into the tools and technologies I wield to build powerful and scalable applications.</p>
                    </div>

                    <div className='flex justify-center items-center pt-10 gap-10 flex-wrap xl:mx-32 relative'>

                        <TechnologyStacks><FaHtml5 className='text-6xl text-orange-500' /></TechnologyStacks>
                        <TechnologyStacks><FaCss3Alt className='text-6xl text-blue-700' /></TechnologyStacks>
                        <TechnologyStacks><FaJsSquare className='text-6xl text-yellow-400' /></TechnologyStacks>
                        <TechnologyStacks><FaReact className='text-6xl text-cyan-400' /></TechnologyStacks>
                        <TechnologyStacks><SiMysql className='text-6xl text-black'/></TechnologyStacks>
                        <TechnologyStacks><FaNodeJs className='text-6xl text-green-500' /></TechnologyStacks>
                        <TechnologyStacks><FaGithub className='text-6xl text-black-500' /></TechnologyStacks>
                        <TechnologyStacks><FaGitAlt className='text-6xl text-orange-600'/></TechnologyStacks>
                        <TechnologyStacks><SiTailwindcss className='text-6xl text-cyan-500'/></TechnologyStacks>
                        <TechnologyStacks><FaBootstrap className='text-6xl text-purple-600' /></TechnologyStacks>

                        <span className='blob4'></span>
                                                          
                    </div>
                </div>

                <div className="pt-20" ref={portfolioRef}>
{/*                     <div className='basis-2/4 pl-10'>
                        <p className='text-xl text-gray-500'>Portfolio</p>
                        <p className='font-semibold text-4xl pt-1'>Selected Works</p>
                    </div>

                    <div className='my-5 flex gap-10 justify-center items-center'>
                        <img src={work1} alt="" className='w-[600px] rounded-md' />
                        <p className='text-4xl font-semibold text-start'>Beautiful and advanced <br /> website interface</p>
                    </div>

                    <div className='rtl:ml-3 my-5 flex gap-10 justify-center items-center'>
                        <p className='text-4xl font-semibold text-end'>An E-commerce website <br /> for furniture</p>
                        <img src={work3} alt="" className='w-[600px] rounded-md' />
                    </div>

                    <div className='my-5 flex gap-10 justify-center items-center'>
                        <img src={work2} alt="" className='w-[600px] rounded-md' />
                        <p className='text-4xl font-semibold text-start'>Digital real state <br /> closing service</p>
                    </div> */}

                </div>
            </section>
            

            <footer>
                <div className='flex justify-center items-center flex-col bg-gray-200' ref={contactRef}>
                    <div className='flex justify-center items-center flex-col' data-aos="zoom-in-up" data-aos-once="false">
                        <p className='pb-10 pt-20'>Let's talk</p>
                        <p className='text-4xl md:text-6xl text-center font-semibold '>Connect and Collaborate</p>
                        <p className='pt-5 text-xl text-center mx-5 m-auto'>Let's not just code, let's create your website together.</p>
                    </div>
                    <div className='pt-12 pb-20' data-aos="zoom-in-up" data-aos-once="false">
                        <button className='flex justify-center items-center gap-2 tracking-wide border-2 border-black rounded-full px-6 py-2 bg-black text-white hover:shadow-xl transition-all'>GET IN TOUCH</button>
                    </div>
                    
                    <div className='w-full'>
                        <div className='max-w-7xl m-auto border-t-2 border-gray-500 pb-5' >
                            <div className='flex justify-between flex-col sm:flex-row items-center pt-5'>
                                <p className=' text-center text-2xl font-bold' >JESSIE BARTOLOME</p>

                                <div className='flex gap-5 pr-3'>
                                    <img src={fb1} alt="" className='w-7' />
                                    <img src={fb2} alt="" className='w-7' />
                                    <img src={fb3} alt="" className='w-7' />
                                    <img src={fb4} alt="" className='w-7' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export function TechnologyStacks({children}) {
    return(
        <div className='border-[1px] border-black w-52 flex justify-center items-center py-5 rounded-md' data-aos="zoom-in-up">
            {children}
        </div>
    )
}
export function Offer({number, title, description}) {
    return(
        <div className='border-[1px] border-black py-5 px-5 text-center md:text-left xl:pr-14' data-aos="zoom-in-up">
            <p className='font-semibold text-xl'> <span className='pr-7'>{number}</span> <span>{title}</span></p>
            <div className='md:pl-14'>
                <p className='text-md'>{description}</p>
            </div>
        </div>
    )
}
