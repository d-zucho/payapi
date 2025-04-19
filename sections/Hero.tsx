import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import HeroPhone from '@/public/home/desktop/illustration-phone-mockup copy.svg'
import Button from '@/components/Button'
import Input from '@/components/Input'

const Hero = () => {
  return (
    <section className='relative mt-8'>
      <MaxWidthWrapper>
        <div className='wrapper flex flex-col-reverse md:flex-row justify-between items-center gap-10'>
          {/* HERO LEFT -- START */}
          <div>
            <h1 className='h1-large text-my-blue text-center mx-auto md:text-left max-md:max-w-lg mb-8'>
              Start building with our APIs for absolutely free.
            </h1>
            <Input />
            <p className='w-fit mt-2 pl-5 text-my-light-blue mx-auto md:mx-0'>
              Have any questions?
              <span className='font-bold'> Contact Us</span>
            </p>
          </div>

          {/* HERO RIGHT -- START */}
          <div className='w-full'>
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
