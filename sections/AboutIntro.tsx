import Image from 'next/image'
import React from 'react'

const AboutIntro = () => {
  // const DesktopBanner = '@/public/about/desktop/image-team-members.jpg'
  // const TabletBanner = '@/public/about/tablet/image-team-members.jpg'
  // const MobileBanner = '@/public/about/mobile/image-team-members.jpg'
  return (
    <div className='mt-20'>
      <div className='mb-12 md:grid md:grid-cols-4'>
        <h2 className='h3-big text-my-blue text-center md:text-left mb-4'>
          Our Vision
        </h2>
        <p className='text-my-light-blue text-center max-w-md lg:max-w-lg mx-auto md:text-left md:col-span-3'>
          Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial
          services through technology.{' '}
        </p>
      </div>
      <div className='md:grid md:grid-cols-4'>
        <h2 className='h3-big text-my-blue text-center md:text-left mb-4'>
          Our Business
        </h2>
        <p className='text-my-light-blue text-center md:text-left max-w-md lg:max-w-lg mx-auto md:col-span-3'>
          At the core of our platform is the technical infrastructure APIs that
          connect consumers. Our innovative product provides key insights for
          businesses and individuals, as well as robust reporting for
          traditional financial institutions and developers.
        </p>
      </div>
    </div>
  )
}

export default AboutIntro
