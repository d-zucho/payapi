import React from 'react'

interface ButtonProps {
  label?: string
  variant?: 'primary' | 'secondary'
}

const Button = ({ label, variant = 'primary' }: ButtonProps) => {
  return (
    <>
      <button className='bg-primary-pink hover:bg-my-active-pink text-primary-white h-12 px-5 rounded-full font-bold transition-colors duration-300 ease-in-out hover:cursor-pointer'>
        {variant === 'primary' ? <span>Schedule a demo</span> : label}
      </button>
    </>
  )
}

export default Button
