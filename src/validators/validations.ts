import * as z from 'zod';

export const UserValidation = z.object({
    username:z.string(),
    password:z.string().min(8),
    email:z.string().email("Invalid Email Address")
})

export type UserValidationType = z.infer<typeof UserValidation>;