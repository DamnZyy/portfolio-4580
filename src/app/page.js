'use client'
import React, { useState, useEffect, useRef } from 'react';

import { Home, HomeContent, HomeTitle, HomeExpertise, HomeIntroduction, HomeButton, HomeProfile, ProfileImage, BoldText } from '@/components/home';
import { About, AboutContent, AboutName, AboutTitle, AboutInfo, AboutInfoTitle, AboutInfoDescription ,AboutFlexBox, AboutDetails,AboutDetailsTitle, AboutDetailsDescription } from '@/components/about';
import { Status, StatusFlexBox, StatusNumber, StatusInfo, StatusDarkFlexBox, StatusDarkNumber, StatusDarkInfo } from '@/components/status';
import { Service, ServiceContent, ServiceMark, ServiceTitle, ServiceDescription, ServiceFlexBox, ServiceOfferBorder, ServiceOfferNumber, ServiceOfferTitle, ServiceOfferDescription } from '@/components/service';
import { TechnologyStacks, TechStackContent, TechStackTitle, TechStackDescription, TechStackFlexBox, TechStackBorder } from '@/components/tech-stack';
import { Portfolio, PortfolioContent, PortfolioMark, PortfolioTitle, PortfolioFlexBox, PortfolioWorks, PortfolioImage } from '@/components/portfolio';
import { Footer, FooterContent, FooterMark, FooterTitle, FooterDescription, FooterButton, FooterSeparator, FooterCredits, FooterSocial } from '@/components/footer';

import { RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { FaReact, FaGitAlt, FaGithub, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaBars, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade as Hamburger } from 'hamburger-react'

export default function Page() {

    const [showShadow, setShowShadow] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [isOpen, setOpen] = useState(false)
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
        setOpen(!isOpen)
    }
    function aboutFunc(){
      const element = aboutRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 50;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}
    }
    return(
        <div className='select-none snap-none bg-default'>
            <nav className={`w-full py-1 md:py-3 px-2 z-50 fixed bg-default transition-all ${showShadow ? (showNavbar ? "" : "shadow-xl") : ''}`}>
                <div className="flex relative justify-between max-w-7xl m-auto p-3">
                    <span className='text-lg font-semibold flex items-center'>
                        <span className='tracking-widest'>Xy</span>
                        <span className='tracking-widest text-danger'>lar</span>
                    </span>
                    <ul className='bg-default justify-center items-center gap-11 text-lg hidden md:flex'>
                        <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' })}}>Home</li>
                        <li onClick={() => {  const element = aboutRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 50;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>About</li>
                        <li onClick={() => { const element = serviceRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 50;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>Services</li>
                        <li onClick={() => { const element = portfolioRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 100;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>Portfolio</li>
                    </ul>
                    <div className='flex justify-center items-center'>
                        <button className={`hidden md:flex border-[1px] rounded-full px-6 py-1 hover:bg-black hover:text-white hover:shadow-md border-black transition-all`} onClick={() => contactRef.current?.scrollIntoView({behavior: 'smooth', block: 'end' })}>Let&apos;s talk</button>
                        <button className="block md:hidden" onClick={Menubar}>
                          <Hamburger size={20} direction="left" distance="sm" toggled={isOpen} />
                        </button>
                    </div>
                </div>
            </nav>

            <ul className={`bg-default z-10 fixed flex justify-center items-center flex-col shadow-xl gap-11 py-10 mt-14 left-0 w-full md:hidden transition-all  ${showNavbar ? "-translate-y-0 " : "-translate-y-[26rem]"}`}>
                <li onClick={() => {Menubar(); window.scrollTo({ top: 0, behavior: 'smooth' })}}>Home</li>
                <li onClick={() => {Menubar(); const element = aboutRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 50;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>About</li>
                <li onClick={() => {Menubar(); const element = serviceRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 80;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>Services</li>
                <li onClick={() => {Menubar(); const element = portfolioRef.current;if (element) {const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 100;window.scrollTo({top: scrollPosition, behavior: 'smooth'});}}}>Portfolio</li>
                <li onClick={() => {Menubar(); contactRef.current?.scrollIntoView({ bottom: 0, behavior: 'smooth'})}}>Contact</li>
            </ul>

            <Home>
              <HomeContent>
                <HomeTitle>Front-End Developer Crafting Digital Solutions</HomeTitle>
                <HomeExpertise>
                  <p>DESIGN</p>
                  <p>DEVELOPMENT</p>
                  <p>WEBFLOW</p>
                </HomeExpertise>
                <HomeIntroduction>
                  <p >Hi, I&apos;m <BoldText> Jessie Bartolome</BoldText>. I turn ideas into reality with expertise in <BoldText>
                  React, Node.js, MongoDB</BoldText>, and more. Explore my portfolio for a glimpse into my coding journey.</p>
                </HomeIntroduction>
                <HomeButton onClick={aboutFunc}>Learn more &rarr;</HomeButton>
              </HomeContent>
              <HomeProfile>
                <ProfileImage image="/Cat.png"></ProfileImage>
              </HomeProfile>
            </Home>

            <About func={aboutRef}>
              <AboutContent>
                <AboutName>Jessie Bartolome</AboutName>
                <AboutTitle>Leading Web Development and Design.</AboutTitle>
              </AboutContent>
              <AboutInfo>
                <AboutInfoTitle>Passionate Front-End Developer with a mission to craft digital experiences that not only meet but exceed expectations.</AboutInfoTitle>
                <AboutInfoDescription>With a love for the front-end realms of web development, I embark on a journey to bring ideas to life through code.</AboutInfoDescription>
                <AboutFlexBox>
                  <AboutDetails>
                    <AboutDetailsTitle>BASED IN</AboutDetailsTitle>
                    <AboutDetailsDescription>Philippines</AboutDetailsDescription>
                  </AboutDetails>
                  <AboutDetails>
                    <AboutDetailsTitle>EXPERIENCE</AboutDetailsTitle>
                    <AboutDetailsDescription>2+ years</AboutDetailsDescription>
                  </AboutDetails>
                  <AboutDetails>
                    <AboutDetailsTitle>SPECIALIZATION</AboutDetailsTitle>
                    <AboutDetailsDescription>Web Development</AboutDetailsDescription>
                  </AboutDetails>
                </AboutFlexBox>
              </AboutInfo>
            </About>

            <Status>
              <StatusFlexBox>
                  <StatusNumber>2+</StatusNumber>
                  <StatusInfo>YEARS OF EXPERIENCE</StatusInfo>
              </StatusFlexBox>
              <StatusDarkFlexBox>
                  <StatusDarkNumber>30+</StatusDarkNumber>
                  <StatusDarkInfo>PROJECT COMPLETED</StatusDarkInfo>
              </StatusDarkFlexBox>
              <StatusFlexBox>
                  <StatusNumber>20+</StatusNumber>
                  <StatusInfo>HAPPY CLIENTS</StatusInfo>
              </StatusFlexBox>
            </Status>

            <Service func={serviceRef}>
              <ServiceContent>
                <ServiceMark>What i offer</ServiceMark>
                <ServiceTitle>Design, Development and Content. All in one.</ServiceTitle>
                <ServiceDescription>Unifying the Essence of Design, Development, and Compelling Content to Forge a Singular, Powerful Digital Experience.</ServiceDescription>
              </ServiceContent>
              <ServiceFlexBox>
                <ServiceOfferBorder>
                  <ServiceOfferNumber>01</ServiceOfferNumber>
                  <ServiceOfferTitle>Web design</ServiceOfferTitle>
                  <ServiceOfferDescription>Tailored to individual client sepecifications, our high-end web design services deliver visually captivating and intuitive websites, ensuring impactful outcomes.</ServiceOfferDescription>
                </ServiceOfferBorder>
                <ServiceOfferBorder>
                  <ServiceOfferNumber>02</ServiceOfferNumber>
                  <ServiceOfferTitle>Web Development</ServiceOfferTitle>
                  <ServiceOfferDescription>Striking and functional websites, powered by Webflow. Easily customizable and manageable, no prior web development experience required.</ServiceOfferDescription>
                </ServiceOfferBorder>
                <ServiceOfferBorder>
                  <ServiceOfferNumber>03</ServiceOfferNumber>
                  <ServiceOfferTitle>Content</ServiceOfferTitle>
                  <ServiceOfferDescription>Full-service solutions for businesses to strengthen their online presence. Quality, engaging content that boosts conversions, optimized for search engines.</ServiceOfferDescription>
                </ServiceOfferBorder>
              </ServiceFlexBox>
            </Service>
            
            <TechnologyStacks>
              <TechStackContent>
                <TechStackTitle>Technology Stacks</TechStackTitle>
                <TechStackDescription>Here&apos;s a glimpse into the tools and technologies I wield to build powerful and scalable applications.</TechStackDescription>
              </TechStackContent>
              <TechStackFlexBox>
                <TechStackBorder><FaHtml5 className='text-5xl small:text-6xl text-orange-500' /></TechStackBorder>
                <TechStackBorder><FaCss3Alt className='text-5xl small:text-6xl text-blue-700' /></TechStackBorder>
                <TechStackBorder><FaJsSquare className='text-5xl small:text-6xl text-yellow-400' /></TechStackBorder>
                <TechStackBorder><FaReact className='text-5xl small:text-6xl text-cyan-400' /></TechStackBorder>
                <TechStackBorder><SiTailwindcss className='text-5xl small:text-6xl text-cyan-500'/></TechStackBorder>
                <TechStackBorder><FaBootstrap className='text-5xl small:text-6xl text-purple-600' /></TechStackBorder> 
                <TechStackBorder><RiNextjsFill className='text-5xl small:text-6xl text-black' /></TechStackBorder>
                <TechStackBorder><FaNodeJs className='text-5xl small:text-6xl text-green-500' /></TechStackBorder>
                <TechStackBorder><SiMysql className='text-5xl small:text-6xl text-black'/></TechStackBorder>
                <TechStackBorder><FaGithub className='text-5xl small:text-6xl text-black-500' /></TechStackBorder>
                <TechStackBorder><FaGitAlt className='text-5xl small:text-6xl text-orange-600'/></TechStackBorder>
              </TechStackFlexBox>
            </TechnologyStacks>

            <Portfolio func={portfolioRef}>
              <PortfolioContent>
                <PortfolioMark>Portfolio</PortfolioMark>
                <PortfolioTitle>Selected Works</PortfolioTitle>
              </PortfolioContent>
              <PortfolioFlexBox>
              <PortfolioImage image="/projects/portfolio1.png"></PortfolioImage>
              <PortfolioImage image="/projects/portfolio2.png"></PortfolioImage>
              <PortfolioImage image="/projects/portfolio3.png"></PortfolioImage>
              </PortfolioFlexBox>
            </Portfolio>

            <Footer func={contactRef}>
              <FooterContent>
                <FooterMark>Let&apos;s talk</FooterMark>
                <FooterTitle>Connect and Collaborate</FooterTitle>
                <FooterDescription>Let&apos;s not just code, let&apos;s create your website together.</FooterDescription>
              </FooterContent>
              <FooterButton>GET IN TOUCH</FooterButton>
              <FooterSeparator>
                <FooterCredits>JESSIE BARTOLOME</FooterCredits>
                <FooterSocial>
                  <FaFacebook className='text-2xl sm:text-3xl' />
                  <FaGithub className='text-2xl sm:text-3xl'/>
                  <FaInstagram className='text-2xl sm:text-3xl'/>
                  <FaTwitter className='text-2xl sm:text-3xl'/>
                </FooterSocial>
              </FooterSeparator>
            </Footer>
        </div>
    )
}
