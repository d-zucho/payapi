import Image from 'next/image'
import React from 'react'

const BgCircle = () => {
  return (
    <div className='bg-circle'>
      <Image
        src='/shared/desktop/bg-pattern-circle.svg'
        alt='bg'
        width={1000}
        height={1000}
        className='absolute -top-1/2 -translate-y-1/2 lg:w-[768px] lg:-right-[220px] lg:-top-1/5 lg:-translate-y-1/5 pointer-events-none'
      />
    </div>
  )
}

export default BgCircle
