'use client'
import { formSchema } from '@/lib/schema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card } from './ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { redirect } from 'next/navigation'

const ContactForm = () => {
  type FormInputs = z.infer<typeof formSchema>

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      companyName: '',
      title: '',
      message: '',
      subscribe: false,
    },
  })

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data)
    alert('Submitted successfully')
    redirect('/')
  }
  return (
    <section className='w-full mt-20'>
      <Card className='max-w-[400px] shadow-lg mx-auto px-8'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className=''>
                  <FormControl>
                    <Input {...field} placeholder='Name' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder='Email' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='companyName'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder='Company Name' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder='Title' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder='Message' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='subscribe'
              render={({ field }) => (
                <FormItem>
                  <div className='flex gap-8 items-center'>
                    <FormControl>
                      <Checkbox
                        id='subscribe'
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormLabel
                      htmlFor='subscribe'
                      className='font-public-sans text-base text-my-light-blue'
                    >
                      Stay up-to-date with company announcements and updates to
                      our API
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              variant={'outline'}
              className='hover:cursor-pointer bg-my-blue text-white mx-auto w-fit'
            >
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </section>
  )
}

export default ContactForm
