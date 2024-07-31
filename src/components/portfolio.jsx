import React from 'react'
import Image from 'next/image'

export function Portfolio({children, func}) {
  return (
    <div className='max-w-7xl m-auto pb-10' ref={func}>
        {children}
    </div>
  )
}
export function PortfolioContent({children}) {
    return (
      <div className='w-full'>
          {children}
      </div>
    )
  }
export function PortfolioMark({children}) {
    return (
    <div className='text-base text-center medium:text-left' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function PortfolioTitle({children}) {
    return (
    <div className='text-3xl sm:text-4xl medium:text-5xl font-semibold text-center medium:text-left' data-aos="zoom-in-up">
        {children}
    </div>
    )
}
export function PortfolioFlexBox({children}) {
    return (
    <div className='flex flex-wrap justify-center items-center py-10 text-center'>
        {children}
    </div>
    )
}
export function PortfolioImage({image}) {
    return (
    <div className='min-w-[300px] mb-10 px-5' data-aos="zoom-in-up">
        <Image src={image} alt='portfolio' width={500} height={500} className='rounded-xl'></Image>
    </div>
    )
}