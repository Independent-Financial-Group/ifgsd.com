import { authMiddleware } from "@clerk/nextjs";
import { NextRequest } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export function loggingMiddleware(NextRequest) {
  console.log(
    `Received ${NextRequest.method} request to ${
      NextRequest.url
    } at ${new Date()}`,
  );

  return { status: 200 };
}

export default authMiddleware({
  //MAKE ALL ROUTES BUT /APP PUBLIC
  publicRoutes: (req) => !req.url.includes("/app"),
  ignoredRoutes: (req) => !req.url.includes("/app"),
  afterAuth: (auth, req) =>
    auth.isPublicRoute ? NextReponse.next() : undefined,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
