import Input from '@/components/Input'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

const HomeCTA = () => {
  return (
    <section className='mt-40'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center lg:flex-row lg:justify-between '>
          <h2 className='text-5xl text-my-blue font-serif-display leading-[6rem]'>
            Ready to start?
          </h2>
          <div className=''>
            <Input className='pr-20  ' />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeCTA
