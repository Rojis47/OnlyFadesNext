import * as z from 'zod';

// model User {
//     id         String   @id @default(uuid())
//     email      String   @unique
//     first_name String
//     last_name  String
//     role       String   @default("user")
//   }

export const UserSchema = z.object({
  email: z.string().email({ message: "Invalid email"}),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long"
  }).optional(),
  first_name: z.string().min(1, { 
    message: "First name must be at least 1 character long"
   }).max(20, { 
    message: "First name must be at most 20 characters long"
    }),
  last_name: z.string().min(1, { 
    message: "Last name must be at least 1 character long"
   }).max(20, { 
    message: "Last name must be at most 20 characters long"
   }),
  role: z.string().optional(),
});

export type TUser = z.infer<typeof UserSchema>;



