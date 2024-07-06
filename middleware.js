import { NextResponse } from "next/server";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/signin" || path === "/signup";

  const auth = request.cookies.get("access-token")?.value || "";
  // assuming got auth from that token by api call
  console.log("auth ======>", auth);

  if (!isPublicPath && !auth) {
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  }
  if (isPublicPath && auth) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  return void 0;
}

export const config = {
  matcher: ["/", "/signin", "/signup"],
};
