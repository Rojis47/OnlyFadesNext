import * as z from "zod";

const invalid_type_error = "Invalid type provided for this field";
const required_error = "This field cannot be blank";

export const UserSchema = z
  .object({
    first_name: z
      .string({ invalid_type_error, required_error })
      .min(1, "Value is too short"),
    last_name: z
      .string({ invalid_type_error, required_error })
      .min(1, "Value is too short"),
    email: z
      .string({ invalid_type_error, required_error })
      .email("Please provide a valid email"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .optional(),
    confirm: z.string(),
    role: z.string().optional(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export type TUser = z.infer<typeof UserSchema>;

export const UserLogInSchema = z.object({
  email: z
    .string({ invalid_type_error, required_error })
    .email("Please provide a valid email"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .optional(),
});
export type TUserLogIn = z.infer<typeof UserLogInSchema>;

export const staticImageSchema = z.object({
  src: z.string(),
  height: z.number(),
  width: z.number(),
  blurDataURL:z.string().optional(),
  blurWidth: z.number().optional(),
  blurHeight: z.number().optional()
})

export type TStaticImage = z.infer<typeof staticImageSchema>;


export const BarberSchema = z.object({
  name: z.string(),
  location: z.string().optional(),  
  squireId: z.string().optional(),  
  role: z.string(),
  imageUrl: staticImageSchema,  
  bookUrl: z.string(),
  linkedinUrl: z.string(),
  pics: z.array(staticImageSchema), 
});


export type TBarber = z.infer<typeof BarberSchema>;
