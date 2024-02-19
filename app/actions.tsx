import { PrismaClient } from "@prisma/client";
import { createClient } from "@/utils/supabase/server";
const prisma = new PrismaClient();
const supabase = createClient();

export const getCurrentUser = async (user: any) => {
  try {
    const prismaUser = await prisma.user.findUnique({
      where: {
        email: user?.email,
      },
    });

    if (user) {
      return prismaUser;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
