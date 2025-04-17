import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  classNames?: string
}

const BgCircle = ({ classNames }: Props) => {
  return (
    <div className=''>
      <Image
        src='/shared/desktop/bg-pattern-circle.svg'
        alt='bg'
        width={900}
        height={900}
        className={twMerge(
          'absolute -top-1/6 sm:-top-1/6 md:-right-[220px] md:w-[768px] -z-20',
          classNames
        )}
      />
    </div>
  )
}

export default BgCircle
