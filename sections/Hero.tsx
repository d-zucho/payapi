import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import HeroPhone from '@/public/home/desktop/illustration-phone-mockup copy.svg'
import Button from '@/components/Button'

const Hero = () => {
  return (
    <section className='relative'>
      <MaxWidthWrapper>
        <div className='wrapper flex flex-col-reverse md:flex-row justify-between items-center gap-10'>
          {/* HERO LEFT -- START */}
          <div>
            <h1 className='h1-large text-my-blue text-center mx-auto md:text-left max-md:max-w-lg '>
              Start building with our APIs for absolutely free.
            </h1>
            <div className='w-fit bg-primary-white rounded-full max-md:mx-auto mt-10'>
              <input
                type='text'
                name=''
                id=''
                placeholder='Enter your email address'
                className='bg-primary-white rounded-full h-12 pl-5 outline-0'
              />
              <Button />
            </div>
          </div>

          {/* HERO RIGHT -- START */}
          <div className='w-full '>
            <Image
              src={HeroPhone}
              alt='Hero'
              className='mx-auto max-md:w-[250px]'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
