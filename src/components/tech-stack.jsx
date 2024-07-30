import React from 'react'

export function TechnologyStacks({children}) {
  return (
    <div className='py-20 max-w-7xl m-auto'>
        {children}
    </div>
  )
}
export function TechStackContent({children}) {
  return (
    <div className='text-center' data-aos="zoom-in-up">
        {children}
    </div>
  )
}
export function TechStackTitle({children}) {
  return (
    <div className='text-4xl sm:text-5xl font-semibold'>
        {children}
    </div>
  )
}
export function TechStackDescription({children}) {
    return (
    <div className='mt-5 px-10'>
        {children}
    </div>
    )
}
export function TechStackFlexBox({children}) {
    return (
    <div className='flex justify-center items-center pt-10 gap-10 flex-wrap xl:mx-32 relative'>
        {children}
    </div>
    )
}
export function TechStackBorder({children}) {
    return(
    <div className='border-[1px] border-black w-52 flex justify-center items-center py-5 rounded-md' data-aos="zoom-in-up">
        {children}
    </div>
    )
}