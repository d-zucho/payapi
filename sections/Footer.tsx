import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import LogoWhite from '@/public/Logo-white.svg'
import Link from 'next/link'
import { NAV_LINKS, SOCIALS } from '@/constants'
import BgCircle from '@/components/BgCircle'

const Footer = () => {
  return (
    <footer className='bg-my-darkest-blue w-full py-10 mt-24'>
      <MaxWidthWrapper>
        <div className='flex flex-col lg:flex-row items-center gap-14 justify-between'>
          <div className='flex flex-col lg:flex-row items-center gap-14'>
            <Link href='/'>
              <Image src={LogoWhite} alt='logo' className='text-white' />
            </Link>
            <nav className='flex gap-6 flex-col md:flex-row items-center'>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='text-primary-white font-medium hover:font-bold tracking-wider transition-all duration-300'
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className='space-x-6'>
            {SOCIALS.map((social) => (
              <Image
                src={social.icon}
                alt={social.label}
                key={social.label}
                className='inline-block mr-4'
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
