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
}
