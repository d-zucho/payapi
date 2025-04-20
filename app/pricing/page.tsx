import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import PricingPlan from '@/components/PricingPlan'
import { PRICING_PLANS } from '@/constants'
import HomeCTA from '@/sections/HomeCTA'

const PricingPage = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <h2 className='font-serif-display text-4xl md:text-5xl lg:text-[56px] text-my-blue mt-20 mb-16 max-lg:text-center '>
          Pricing
        </h2>
        <div className='flex flex-col sm:flex-row gap-10 justify-between items-center'>
          {PRICING_PLANS.map((plan) => (
            <PricingPlan
              key={plan.plan}
              plan={plan.plan}
              features={plan.features}
              info={plan.info}
              price={plan.price}
            />
          ))}
        </div>
        <HomeCTA />
      </MaxWidthWrapper>
    </div>
  )
}

export default PricingPage
