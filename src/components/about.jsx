import React from 'react'

export function About({children, func}) {
  return (
    <div className='max-w-7xl m-auto flex justify-between pt-10 pb-28 sm:pt-32 flex-col medium:flex-row p-5' ref={func}>
        {children}
    </div>
  )
}
export function AboutContent({children}) {
    return (
    <div className='basis-2/5 relative p-5'>
        {children}
    </div>
    )
}
export function AboutName({children}) {
    return (
    <div className='text-xl pb-4 text-center medium:text-left' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function AboutTitle({children}) {
    return (
    <div className='font-bold text-4xl sm:text-5xl max-w-[400px] m-auto medium:m-0 text-center medium:text-left' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function AboutInfo({children}) {
    return (
    <div className='basis-[55%] relative' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function AboutInfoTitle({children}) {
    return (
    <div className='font-semibold text-xl sm:text-2xl text-center medium:text-left' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function AboutInfoDescription({children}) {
    return (
    <div className='text-gray-500 mt-5 text-center medium:text-left' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function AboutFlexBox({children}) {
    return (
    <div className='flex flex-wrap justify-center sm:justify-between items-center pt-10 gap-10'>
        {children}
    </div>
    )
}
export function AboutDetails({children}) {
    return (
    <div className='text-center medium:text-left' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function AboutDetailsTitle({children}) {
    return (
    <span className='font-semibold text-sm'>
        {children}
    </span>
    )
}
export function AboutDetailsDescription({children}) {
    return (
    <div className='font-bold text-2xl pt-1'>
        {children}
    </div>
    )
}



