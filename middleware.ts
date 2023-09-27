import {authMiddleware, redirectToSignIn} from '@clerk/nextjs'
import {prisma} from '@/utils/db'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  // afterAuth(auth, req, evt) {
  //   console.log('auth :', auth)
  //   console.log('req:', req)
  //   console.log('evt :', evt)
  //   if (!auth.userId && !auth.isPublicRoute) {
  //     return redirectToSignIn({returnBackUrl: req.url})
  //   }
  //   if (auth.userId) {
  //     prisma.user
  //       .findUnique({
  //         where: {
  //           clerkId: auth.userId,
  //         },
  //       })
  //       .then(user => {
  //         if (!user) {
  //           prisma.user.create({
  //             data: {
  //               clerkId: auth.userId,
  //               email: auth.user?.emailAddresses[0].emailAddress || '',
  //             },
  //           })
  //         }
  //       })
  //   }
  // },
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
