import React from 'react'
import Button from './Button'
import { cn } from '@/lib/utils'

interface Props {
  placeholder?: string
  className?: string
}

const Input = ({ placeholder, className }: Props) => {
  return (
    <div className='max-w-fit bg-primary-white rounded-full max-md:mx-auto max-lg:mt-10 flex'>
      <input
        type='email'
        name=''
        id=''
        placeholder='Enter your email address'
        className={cn(
          'bg-primary-white rounded-full h-12 pl-5 outline-0 pr-5',
          className
        )}
      />
      <Button />
    </div>
  )
}

export default Input
