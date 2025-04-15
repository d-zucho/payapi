import Image from 'next/image'
import React from 'react'

const BgCircle = () => {
  return (
    <div className=''>
      <Image
        src='/shared/desktop/bg-pattern-circle.svg'
        alt='bg'
        width={900}
        height={900}
        className='absolute -top-1/6 sm:-top-1/6 md:-right-[220px] md:w-[768px] -z-20'
      />
    </div>
  )
}

export default BgCircle
