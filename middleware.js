export { default } from "next-auth/middleware";

// matches all sub directories of /app
export const config = {
  matcher: ["/app/:path*"],
};
