import authMiddleware from "next-auth/middleware";

const noop = () => {};

const middleware = process.env.DISCORD_CLIENT_ID ? authMiddleware : noop;

export default middleware;

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!api/outstatic|outstatic).*)",
  ],
};
