import { clerkMiddleware, createRouteMatcher, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  '/',
]);

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth();

  // Allow public routes without authentication
  if (isPublicRoute(request)) return NextResponse.next();
  
  // Redirect unauthenticated users to sign-in page
  if (!userId) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next(); 
});

export const config = {
  matcher: [
    "/((?!_next|.*\\.(?:ico|png|jpg|jpeg|svg|gif|css|js|woff2?|ttf|eot|map|json)).*)",
    "/(api|trpc)(.*)",  
  ],
};
