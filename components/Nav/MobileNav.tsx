import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { MenuIcon } from 'lucide-react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import { Separator } from '../ui/separator'
import Button from '@/components/Button'

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <MenuIcon size={28} className=' hover:cursor-pointer' />
        </SheetTrigger>
        <SheetContent className='[&>button]:hover:cursor-pointer bg-my-darkest-blue border-0 px-8 py-12 [&>button]:mt-12'>
          {/* SHEET HEADER START */}
          <SheetHeader>
            <SheetTitle>
              <SheetClose asChild>
                <Link href='/'>
                  <h2 className='font-mono text-white/80 text-3xl font-bold '>
                    pay<span className='font-light'>api</span>
                  </h2>
                </Link>
              </SheetClose>
            </SheetTitle>
            <VisuallyHidden>
              <SheetDescription>
                PayAPI - the plug-and-play API for all payment needs.
              </SheetDescription>
              asd
            </VisuallyHidden>
            <Separator className='bg-white/10 mt-6' />
            <div />
          </SheetHeader>
          {/* SHEET BODY -- START */}
          <div className='text-center'>
            <div className='flex flex-col gap-12 mt-8 items-center'>
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.label}>
                  <Link
                    href={link.href}
                    className='text-primary-white/70 hover:text-primary-white font-medium text-[20px]'
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
            <div className='mt-12'>
              <Button />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
