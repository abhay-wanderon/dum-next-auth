import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const path = req.nextUrl.pathname;
    const isAuth = !!req.nextauth.token;
    const authPaths = ["/login", "/register"];
    if (path === "/" && !isAuth) {
      return NextResponse.next();
    } else if (
      (path === "/" && isAuth) ||
      (isAuth && (authPaths.includes(path) || path === "/"))
    ) {
      return NextResponse.redirect(new URL("/protected", req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/", "/login", "/register", "/protected"],
};
