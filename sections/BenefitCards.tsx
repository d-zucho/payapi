import Benefit from '@/components/Benefit'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { BENEFITS } from '@/constants'

const BenefitCards = () => {
  return (
    <section className='mt-32'>
      <MaxWidthWrapper>
        {/* <div className='flex flex-col lg:flex-row mx-auto w-fit justify-center lg:justify-between gap-10'> */}
        <div className='flex flex-row  justify-center gap-12 lg:gap-10 max-lg:flex-wrap'>
          {BENEFITS.map(({ benefit, info, icon }, i) => (
            <Benefit key={i} benefit={benefit} info={info} icon={icon} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default BenefitCards
