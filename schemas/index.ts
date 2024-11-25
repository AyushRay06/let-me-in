import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string().min(3, {
    message: "Password is required",
  }),
})
