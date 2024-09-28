import {z} from 'zod'

export const usernameValidation=z
    .string()
    .min(2,"Username must be atleast of 2 characters")
    .max(20,"username must be no more than 20 character")
    .regex(/^\S+@\S+\.\S+$/, "username must not contail any special charcter")

    export const signUpSchema=z.object({
        username: usernameValidation,
        email: z.string().email({message:'Invalid Email address'}),
        password:z.string().min(6,{message:'password must be atleast of 6 character'})
    })