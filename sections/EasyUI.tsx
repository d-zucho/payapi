import BgCircle from '@/components/BgCircle'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { UIPhones } from '@/constants'
import Image from 'next/image'

const EasyUI = () => {
  return (
    <section className='mt-20 relative '>
      <BgCircle classNames='-top-[450px]' />
      <MaxWidthWrapper>
        <div
          id='wrapper'
          className='flex lg:flex-row flex-col-reverse lg:justify-between gap-10 lg:items-center'
        >
          <div className=''>
            <h2 className='h2 text-my-blue text-center lg:text-left'>
              Simple UI & UX
            </h2>
            <p className='text-my-light-blue text-center lg:text-left mx-auto lg:mx-0 mt-4 max-w-lg'>
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.{' '}
            </p>
          </div>
          <div className=''>
            <Image
              src={UIPhones}
              alt='Easy UI & UX'
              className='mx-auto max-lg:w-[350px] w-[475px] lg:mx-0'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default EasyUI
