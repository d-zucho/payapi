import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Logo from '../public/shared/desktop/logo.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <Image src={Logo} alt='logo' width={140} height={40} />
      </MaxWidthWrapper>
    </div>
  )
}

export default Navbar
