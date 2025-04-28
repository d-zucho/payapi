import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { ABOUT_FACTS } from '@/constants'
import React from 'react'

const AboutInfo = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 justify-center items-center max-md:border-y-1 max-md:border-[#36536B]/25 py-4 max-md:w-[300px] max-md:mx-auto md:border-0'>
          {ABOUT_FACTS.map((fact, index) => (
            <div
              key={index}
              className='border-0 md:border-y-1 md:border-[#36536B]/25 py-4 max-w-sm max-md:mx-auto max-md:text-center'
            >
              <p className='text-my-light-blue'>{fact.info}</p>
              <p className='h1-small font-serif-display text-primary-pink '>
                {fact.fact}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutInfo
