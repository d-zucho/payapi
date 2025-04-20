import { Check } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'
import Button from './Button'

interface PricingPlanProps {
  plan: string
  price: string
  info: string
  features: number
}

const FEATURES = [
  'Transactions',
  'Auth',
  'Identity',
  'Investments',
  'Assets',
  'Liabilities',
  'Income',
]

const PricingPlan = ({ plan, price, info, features }: PricingPlanProps) => {
  return (
    <div className='max-w-sm sm:max-w-[250px]'>
      <div className=''>
        <h4 className='h4 text-center lg:text-left text-primary-pink'>
          {plan} Plan
        </h4>
        <p className='hidden sm:block text-center lg:text-left mt-5 line-clamp-3!'>
          {info}
        </p>
        <p className='md:text-5xl text-[56px] lg:text-[56px] font-serif-display text-my-blue mt-6 text-center lg:text-left'>
          {price}
        </p>
      </div>
      <Separator className='bg-my-light-blue opacity-20 mt-5' />
      <div className='flex flex-col gap-2  w-fit mx-auto lg:mx-0 mt-6'>
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className={cn(
              features > index ? 'font-bold' : '',
              'flex gap-2 items-center'
            )}
          >
            <Image
              src={Check}
              alt='check'
              className={cn(
                features > index ? '' : 'opacity-0',
                'pointer-events-none'
              )}
            />
            <span className={cn(features > index ? '' : 'text-my-light-blue')}>
              {feature}
            </span>
          </div>
        ))}
      </div>
      <Separator className='bg-my-light-blue opacity-20 mt-5' />
      <div className='w-fit mx-auto mt-6 lg:mx-0'>
        <Button variant='secondary' label='Request Access' />
      </div>
    </div>
  )
}

export default PricingPlan
