import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Logo from '@/public/shared/desktop/logo.svg'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import Button from '@/components/Button'

const Navbar = () => {
  return (
    <div>
      <MaxWidthWrapper className=''>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-16'>
            <Image src={Logo} alt='logo' width={140} height={40} />
            <div className='flex gap-10 items-center'>
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Button />
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Navbar
