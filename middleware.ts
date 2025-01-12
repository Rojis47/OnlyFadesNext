import { updateSession } from "@/utils/supabase/middleware";
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCurrentUser } from "@/app/actions";
import { PrismaClient } from "@prisma/client";


export async function middleware(req: NextRequest) {
    // We need to create a response and hand it to the supabase client to be able to modify the response headers.
    const res = NextResponse.next()
const prisma = new PrismaClient();

    // Create authenticated Supabase Client.
    const supabase = createMiddlewareClient({ req, res })
    // Check if we have a session

  
    // const { data: { user } } = await supabase.auth.getUser()
    
    const { data: { user } } = await supabase.auth.getUser()
  
    // Check auth condition
    if (user?.email?.endsWith('@gmail.com')) {
      // Authentication successful, forward request to protected route.
      return res
    }
  
    // Auth condition not met, redirect to home page.
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/'
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
}
export const config = {
  matcher: ["/dashboard"],
};
