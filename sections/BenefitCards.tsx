import Benefit from '@/components/Benefit'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { BENEFITS } from '@/constants'

const BenefitCards = () => {
  return (
    <section className='mt-40'>
      <MaxWidthWrapper>
        <div className='flex justify-between'>
          {BENEFITS.map(({ benefit, info, icon }, i) => (
            <Benefit key={i} benefit={benefit} info={info} icon={icon} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default BenefitCards
