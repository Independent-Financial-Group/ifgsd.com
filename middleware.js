import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware

export default authMiddleware({
  //MAKE ALL ROUTES BUT /APP PUBLIC
  // publicRoutes: (req) => !req.url.includes("/app"),
  // ignoredRoutes: (req) => !req.url.includes("/app"),
  publicRoutes: ["((?!^/app).*)"],
  ignoredRoutes: ["((?!^/app).*)"],
  debug: process.env.NEXT_PUBLIC_VERCEL_ENV == "development" ? true : false,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
