import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import Logo from '@/public/shared/desktop/logo.svg'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'

const Footer = () => {
  return (
    <footer className='bg-my-darkest-blue w-full'>
      <MaxWidthWrapper>
        <div className='flex items-center gap-14'>
          <Link href='/'>
            <Image src={Logo} alt='logo' className='text-white' />
          </Link>
          <div className='hidden sm:flex gap-8'>
            <nav className='flex gap-6'>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='text-my-blue font-medium hover:font-bold'
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
