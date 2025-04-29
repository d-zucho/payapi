import ContactForm from '@/components/ContactForm'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const ContactPage = () => {
  return (
    <div className=''>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between'>
          <h1 className='font-serif-display text-my-blue text-[32px] md:text-[48px] lg:text-[56px] leading-9 md:leading-[56px] my-20 text-center lg:text-left max-w-lg lg:max-w-2xl max-lg:mx-auto'>
            Submit a help request and we’ll get in touch shortly.
          </h1>
          <ContactForm />
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default ContactPage
