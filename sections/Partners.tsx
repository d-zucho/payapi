import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import {
  GoogleWhite,
  HPWhite,
  MicrosoftWhite,
  NvidiaWhite,
  OracleWhite,
  TeslaWhite,
} from '@/constants'
import Image from 'next/image'

const Partners = () => {
  return (
    <section className='relative mt-20 bg-my-darkest-blue w-full py-20'>
      <MaxWidthWrapper>
        <div
          id='wrapper'
          className='flex flex-col lg:flex-row justify-between items-center gap-10'
        >
          {/* CONTENT -- START */}
          <div className='flex-1 text-center lg:text-left'>
            <h2 className='text-primary-white h2'>Who we work with</h2>
            <p className='text-primary-white/70 max-w-prose mt-4 lg:max-w-lg'>
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.{' '}
            </p>
          </div>

          {/* IMAGES -- START */}
          <div className='flex-1 flex max-lg:gap-10 gap-5 justify-between items-center max-lg:mt-10'>
            <div className='space-y-10'>
              <Image src={TeslaWhite} alt='Tesla' className='' width={100} />
              <Image src={OracleWhite} alt='Oracle' className='' width={100} />
            </div>
            <div className='space-y-10'>
              <Image
                src={MicrosoftWhite}
                alt='Microsoft'
                className=''
                width={100}
              />
              <Image src={GoogleWhite} alt='Google' className='' width={100} />
            </div>
            <div className='space-y-10'>
              <Image
                src={HPWhite}
                alt='Hewitt Packard'
                className=''
                width={100}
              />
              <Image src={NvidiaWhite} alt='Nvidia' className='' width={100} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Partners
