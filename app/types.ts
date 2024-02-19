import * as z from 'zod';

const invalid_type_error = 'Invalid type provided for this field';
const required_error = 'This field cannot be blank';

export const UserSchema = z.object({
  email:  z
          .string({ invalid_type_error, required_error })
          .email('Please provide a valid email')
          .min(1, 'Value is too short'),
  password: z
          .string()
          .min(6, {message: "Password must be at least 6 characters long"})
          .optional(),
  first_name: z
          .string({ invalid_type_error, required_error })
          .min(1, 'Value is too short'),
  last_name: z
          .string({ invalid_type_error, required_error })
          .min(1, 'Value is too short'),
  role: z.string().optional(),
});

export type TUser = z.infer<typeof UserSchema>;


export const UserLogInSchema = z.object({
        email:  z
                .string({ invalid_type_error, required_error })
                .email('Please provide a valid email')
                .min(1, 'Value is too short'),
        password: z
                .string()
                .min(6, {message: "Password must be at least 6 characters long"})
                .optional(),
});
export type TUserLogIn = z.infer<typeof UserLogInSchema>;



