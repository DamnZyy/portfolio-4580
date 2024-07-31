import React from 'react'
import Image from 'next/image'

export function Home({children}) {
  return (
    <div className='max-w-7xl m-auto py-28  grid grid-cols-1 gap-10 relative xl:grid-cols-2 xl:gap-0'>
        {children}
    </div>
  )
}
export function HomeContent({children}) {
    return (
    <div className='flex flex-col justify-center items-center gap-5 leading-none xl:items-start'>
        {children}
    </div>
    )
}
export function HomeTitle({children}) {
    return (
    <div className='font-bold max-w-[700px] text-3xl sm:text-4xl medium:text-5xl text-center xl:text-start' data-aos="fade-down" data-aos-duration="1000">
        {children}
    </div>
    )
}
export function HomeExpertise({children}) {
    return (
    <div className='flex items-center gap-8 font-semibold text-md sm:text-xl' data-aos="fade-down" data-aos-duration="1500">
        {children}
    </div>
    )
}
export function HomeIntroduction({children}) {
    return (
    <div className='text-base sm:text-xl text-center xl:text-start max-w-[700px] px-5 xl:px-0' data-aos="fade-down" data-aos-duration="2000">
        {children}
    </div>
    )
}
export function HomeButton({children, onClick}) {
    return (
    <div className="flex justify-center items-center gap-2 tracking-wide border-2 rounded-full px-6 py-3 hover:shadow-xl border-black bg-black text-white transition-all" data-aos="fade-down" data-aos-duration="2500" onClick={onClick} >
        {children}
    </div>
    )
}
export function HomeProfile({children}) {
  return (
    <div className='mx-10 sm:m-0 m-auto flex justify-center items-center relative order-first xl:order-last' data-aos="fade-down" data-aos-duration="500">
        {children}
    </div>
  )
}
export function ProfileImage({image}) {
    return (
    <Image width={1000} height={1000} src={image} alt="profile" className='rounded-full w-[500px] border-4 small:border-[7px] p-1 border-black shadow-block' />
    )
}
export function BoldText({children}) {
  return (
    <span className='font-medium'>
        {children}
    </span>
  )
}
