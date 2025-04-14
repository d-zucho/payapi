import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Logo from '@/public/shared/desktop/logo.svg'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import Button from '@/components/Button'
import { Menu, MenuIcon } from 'lucide-react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <div>
      <MaxWidthWrapper className='flex justify-between items-center'>
        <div className='flex items-center gap-14'>
          <Link href='/'>
            <Image src={Logo} alt='logo' />
          </Link>
          <div className='hidden sm:flex gap-8'>
            <nav className='flex gap-6'>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='text-my-blue font-medium'
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className='sm:hidden'>
          <MobileNav />
        </div>
        <div className='hidden sm:flex'>
          <Button />
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Navbar
