import BenefitCards from '@/sections/BenefitCards'
import EasyUI from '@/sections/EasyUI'
import Hero from '@/sections/Hero'
import HomeCTA from '@/sections/HomeCTA'
import Implement from '@/sections/Implement'
import Partners from '@/sections/Partners'

export default function Home() {
  return (
    <div className='relative overflow-clip'>
      <Hero />
      <Partners />
      <Implement />
      <EasyUI />
      <BenefitCards />
      <HomeCTA />
    </div>
  )
}
