import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import AboutInfo from '@/sections/AboutInfo'
import AboutIntro from '@/sections/AboutIntro'
import HomeCTA from '@/sections/HomeCTA'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <div className='mt-16'>
        <MaxWidthWrapper>
          <div className='lg:ml-16'>
            <h1 className='text-3xl text-my-blue font-medium font-serif-display max-lg:text-center md:text-5xl max-w-xl lg:max-w-2xl leading-[56px] mx-auto lg:mx-0 lg:text-[56px] lg:leading-[60px]'>
              We empower innovators by delivering access to the financial system
            </h1>

            <AboutIntro />
          </div>
        </MaxWidthWrapper>
        <div className='w-full mt-20'>
          <picture className='w-full'>
            <source
              srcSet={'/about/desktop/image-team-members.jpg'}
              media='(min-width: 64rem)'
            />
            <source
              srcSet='/about/tablet/image-team-members.jpg'
              media='(min-width: 48rem)'
            />
            <img
              src='/about/mobile/image-team-members.jpg'
              alt='Team Members'
              className='w-full h-[300px] md:h-[250px] lg:h-[500px] object-cover'
            />
          </picture>
        </div>
        <AboutInfo />
        <HomeCTA />
      </div>
    </>
  )
}

export default AboutPage
