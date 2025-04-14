import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Button from '../Button'

const DesktopNav = () => {
  return (
    <div className='flex jusbtify-between items-center w-full'>
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
      <Button />
    </div>
  )
}

export default DesktopNav
