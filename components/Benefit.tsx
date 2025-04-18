import { PersonalFinancesIcon } from '@/constants'
import Image from 'next/image'

interface BenefitProps {
  benefit: string
  info: string
  icon: string
}

const Benefit = ({ benefit, info, icon }: BenefitProps) => {
  return (
    <article className='max-lg:w-[220px] w-[320px] max-w-[350px]'>
      <div className=''>
        <Image
          src={icon}
          alt={benefit}
          width={100}
          height={100}
          className='my-4 mx-auto'
        />
      </div>
      <div className='text-center'>
        <h3 className='h3-small font-bold text-my-blue mb-4'>{benefit}</h3>
        <p className='text-my-light-blue'>{info}</p>
      </div>
    </article>
  )
}

export default Benefit
