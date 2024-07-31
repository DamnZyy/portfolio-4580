import React from 'react'

export function Status({children}) {
  return (
    <div className='max-w-7xl m-auto flex justify-center flex-wrap pb-10'>
        {children}
    </div>
  )
}

export function StatusFlexBox({children}) {
  return (
    <div className='min-w-[320px] small:min-w-[450px] medium:min-w-[400px] py-10 text-center border-[1px] border-black' data-aos="zoom-in-up">
        {children}
    </div>
  )
}
export function StatusNumber({children}) {
    return (
    <div className=' font-bold text-6xl mb-2'>
        {children}
    </div>
    )
}
export function StatusInfo({children}) {
    return (
    <div className='font-semibold'>
        {children}
    </div>
    )
}

export function StatusDarkFlexBox({children}) {
    return (
      <div className='min-w-[320px] small:min-w-[450px] medium:min-w-[400px] py-10 bg-black text-center border-[1px] border-black' data-aos="zoom-in-up">
          {children}
      </div>
    )
  }
  export function StatusDarkNumber({children}) {
      return (
      <div className=' font-bold text-6xl mb-2 text-default'>
          {children}
      </div>
      )
  }
  export function StatusDarkInfo({children}) {
      return (
      <div className='font-semibold text-default'>
          {children}
      </div>
      )
  }

