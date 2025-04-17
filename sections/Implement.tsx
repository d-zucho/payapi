import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'

import { ImplementWindow } from '@/constants'

const Implement = () => {
  return (
    <section className='my-25'>
      <MaxWidthWrapper>
        <div
          id='wrapper'
          className='lg:flex lg:gap-20 lg:items-center lg:justify-between '
        >
          {/* IMAGE -- START */}
          <div className=''>
            <Image
              src={ImplementWindow}
              alt='Script'
              className='mx-auto max-w-[400px] lg:max-w-[400px] max-lg:mb-12'
            />
          </div>

          {/* CONTENT -- START */}
          <div>
            <h2 className='text-my-blue h2 text-center lg:text-left'>
              Easy to implement
            </h2>
            <p className='text-my-light-blue max-w-lg text-center lg:text-left mx-auto lg:mx-0'>
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Implement
