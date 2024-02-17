import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// import { TUser } from "./types";

// export async function createUser({
//   first_name,
//   last_name,
//   email,
//   role,
// }: TUser) {
//   const user = await prisma.user.create({
//     data: {
//       first_name,
//       last_name,
//       email,
//       role,
//     },
//   });

//   return user;
// }
