// Auth Works here by questioning whether the user here has signed in at all, if not will immediate redirect to sign in/sign up by protecting all routes, which is what I want for this project.

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/api/webhooks(.*)'
]);

export default clerkMiddleware((auth, request) => {

  if(!isPublicRoute(request)) {
    auth().protect();
  }
}, { debug: true });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}