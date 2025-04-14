import React from 'react'
import Button from './Button'

const Input = () => {
  return (
    <div className='max-w-fit bg-primary-white rounded-full max-md:mx-auto mt-10 flex'>
      <input
        type='text'
        name=''
        id=''
        placeholder='Enter your email address'
        className='bg-primary-white rounded-full h-12 pl-5 outline-0'
      />
      <Button />
    </div>
  )
}

export default Input
