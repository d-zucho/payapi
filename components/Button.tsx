import { cn } from '@/lib/utils'
import React from 'react'

interface ButtonProps {
  label?: string
  variant?: 'primary' | 'secondary'
}

const Button = ({ label, variant = 'primary' }: ButtonProps) => {
  return (
    <>
      <button
        className={cn(
          'h-12 px-5 rounded-full font-bold transition-colors duration-300 ease-in-out hover:cursor-pointer max-sm:text-sm',
          {
            'bg-primary-pink text-primary-white hover:bg-my-active-pink':
              variant === 'primary',
            'bg-transparent text-my-blue px-7 border-1 border-my-blue hover:bg-my-blue hover:text-primary-white':
              variant === 'secondary',
          }
        )}
      >
        {variant === 'primary' ? <span>Schedule a demo</span> : label}
      </button>
    </>
  )
}

export default Button
