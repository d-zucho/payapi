import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Google, HP, Microsoft, Nvidia, Oracle, Tesla } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <section className='relative mt-20 bg-my-darkest-blue w-full py-20'>
      <MaxWidthWrapper>
        <div
          id='wrapper'
          className='flex flex-col md:flex-row justify-between items-center gap-10'
        >
          {/* CONTENT -- START */}
          <div className='flex-1 text-center md:text-left'>
            <h2 className='text-primary-white h2'>Who we work with</h2>
            <p className='text-primary-white/70 max-w-prose'>
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.{' '}
            </p>
          </div>

          {/* IMAGES -- START */}
          <div className='flex-1 flex gap-5 justify-between items-center max-md:mt-15'>
            <div className='space-y-10'>
              <Image src={Tesla} alt='Tesla' className='' width={100} />
              <Image src={Oracle} alt='Oracle' className='' width={100} />
            </div>
            <div className='space-y-10'>
              <Image src={Microsoft} alt='Microsoft' className='' width={100} />
              <Image src={Google} alt='Google' className='' width={100} />
            </div>
            <div className='space-y-10'>
              <Image src={HP} alt='Hewitt Packard' className='' width={100} />
              <Image src={Nvidia} alt='Nvidia' className='' width={100} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Partners
