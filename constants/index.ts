import Tesla from '@/public/shared/desktop/tesla.svg'
import TeslaWhite from '@/public/shared/desktop/tesla-white.svg'
import Oracle from '@/public/shared/desktop/oracle.svg'
import OracleWhite from '@/public/shared/desktop/oracle-white.svg'
import Microsoft from '@/public/shared/desktop/microsoft.svg'
import MicrosoftWhite from '@/public/shared/desktop/microsoft-white.svg'
import Google from '@/public/shared/desktop/google.svg'
import GoogleWhite from '@/public/shared/desktop/google-white.svg'
import HP from '@/public/shared/desktop/hewlett-packard.svg'
import HPWhite from '@/public/shared/desktop/hp-white.svg'
import Nvidia from '@/public/shared/desktop/nvidia.svg'
import NvidiaWhite from '@/public/shared/desktop/nvidia-white.svg'
// import ImplementWindow from '@/public/home/desktop/illustration-easy-to-implement.svg'
import ImplementWindow from '@/public/home/easy-to-implement.svg'
import UIPhones from '@/public/home/desktop/illustration-simple-ui.svg'
import BankingIcon from '@/public/home/desktop/icon-banking-and-coverage.svg'
import ConsumerIcon from '@/public/home/desktop/icon-consumer-payments.svg'
import PersonalFinancesIcon from '@/public/home/desktop/icon-personal-finances.svg'
import Twitter from '@/public/shared/desktop/twitter.svg'
import Facebook from '@/public/shared/desktop/facebook.svg'
import LinkedIn from '@/public/shared/desktop/linkedin.svg'
import Check from '@/public/shared/desktop/icon-check.svg'

export const SOCIALS: { label: string; icon: string }[] = [
  {
    label: 'Twitter',
    icon: Twitter,
  },
  {
    label: 'Facebook',
    icon: Facebook,
  },
  {
    label: 'LinkedIn',
    icon: LinkedIn,
  },
]

export const NAV_LINKS: TNavlink[] = [
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]
export const BENEFITS: TBenefitCardInfo[] = [
  {
    benefit: 'Personal Finances',
    info: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ',
    icon: PersonalFinancesIcon,
  },
  {
    benefit: 'Banking & Coverage',
    info: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
    icon: BankingIcon,
  },
  {
    benefit: 'Consumer Payments',
    info: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
    icon: ConsumerIcon,
  },
]

export const PRICING_PLANS: TPricingPlan[] = [
  {
    plan: 'Free',
    price: '$0.00',
    info: 'Build and test using our core set of products with up to 100 API requests',
    features: 3,
  },
  {
    plan: 'Basic',
    price: '$249.00',
    info: 'Launch your project with unlimited requests and no contractual minimums',
    features: 5,
  },
  {
    plan: 'Premium',
    price: '$499.00',
    info: 'Get tailored solutions, volume pricing, and dedicated support for your team ',
    features: 7,
  },
]

export const ABOUT_FACTS: TAboutFact[] = [
  {
    fact: '300+',
    info: 'Team Members',
  },
  {
    fact: '3',
    info: 'Offices in the US',
  },
  {
    fact: '10M+',
    info: 'Transactions analyzed',
  },
]

export {
  Tesla,
  Oracle,
  Microsoft,
  Google,
  HP,
  Nvidia,
  TeslaWhite,
  OracleWhite,
  MicrosoftWhite,
  GoogleWhite,
  HPWhite,
  NvidiaWhite,
  ImplementWindow,
  UIPhones,
  BankingIcon,
  ConsumerIcon,
  PersonalFinancesIcon,
  Check,
}
