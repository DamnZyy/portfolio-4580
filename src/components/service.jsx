import React from 'react'

export function Service({func, children}) {
  return (
    <div className='flex max-w-7xl m-auto p-5 sm:py-20 flex-col medium:flex-row' ref={func}>
        {children}
    </div>
  )
}
export function ServiceContent({children}) {
    return (
    <div className='basis-2/4 p-5' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function ServiceMark({children}) {
    return (
    <div className='text-base text-center medium:text-left' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function ServiceTitle({children}) {
    return (
    <div className='font-semibold mt-5 text-3xl sm:text-4xl text-center medium:text-left' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function ServiceDescription({children}) {
    return (
    <div className='py-7 medium:w-[400px] text-center medium:text-left' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function ServiceFlexBox({children}) {
    return (
    <div className='basis-1/2 flex gap-5 flex-col' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function ServiceOfferBorder({children}) {
    return (
    <div className='border-[1px] border-black p-5 md:text-left xl:pr-14' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function ServiceOfferNumber({children}) {
    return (
    <span className='font-semibold pr-7'>
        {children}
    </span>
    )
}
export function ServiceOfferTitle({children}) {
    return (
    <span className='font-semibold'>
        {children}
    </span>
    )
}
export function ServiceOfferDescription({children}) {
    return (
    <div className='md:pl-12'>
        {children}
    </div>
    )
}