import React from 'react'

export function Footer({children, func}) {
  return (
    <div className='flex justify-center items-center flex-col bg-gray-200' ref={func}>
        {children}
    </div>
  )
}
export function FooterContent({children}) {
    return (
    <div className='flex justify-center items-center flex-col' data-aos="zoom-in-up" data-aos-once="false">
        {children}
    </div>
    )
}
export function FooterMark({children}) {
    return (
    <div className='pb-10 pt-20'>
        {children}
    </div>
    )
}
export function FooterTitle({children}) {
    return (
    <div className='text-4xl md:text-6xl text-center font-semibold'>
        {children}
    </div>
    )
}
export function FooterDescription({children}) {
    return (
    <div className='pt-5 text-xl text-center mx-5 m-auto'>
        {children}
    </div>
    )
}
export function FooterButton({children}) {
    return (
    <div className='flex justify-center items-center tracking-wide mt-12 mb-20 border-2 border-black rounded-full px-6 py-2 bg-black text-white hover:shadow-xl transition-all' data-aos="zoom-in-up" data-aos-once="false">
        {children}
    </div>
    )
}
export function FooterSeparator({children}) {
    return (
    <div className='w-full'>
        <div className='max-w-7xl m-auto border-t-2 border-gray-500 pb-5'>
            <div className='flex justify-between flex-col sm:flex-row items-center pt-5'>
                {children}
            </div>
        </div>
    </div>
    )
}
export function FooterCredits({children}) {
    return (
    <div className=' text-center text-xl sm:text-2xl font-bold pb-2 sm:pl-5 sm:pb-0'>
        {children}
    </div>
    )
}
export function FooterSocial({children}) {
    return (
    <div className='flex gap-5 sm:pr-5'>
        {children}
    </div>
    )
}