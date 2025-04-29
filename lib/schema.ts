import { title } from 'process'
import { z } from 'zod'

export const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .max(100, { message: 'Email must be less than 100 characters' }),
  companyName: z.string().min(2, { message: 'Company name is required' }),
  title: z.string().min(2, { message: 'Title is required' }),
  message: z.string().optional(),
  subscribe: z.boolean().optional(),
})
