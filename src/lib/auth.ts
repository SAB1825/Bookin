import { SendVerificationEmail } from "./../email/send-verification-email";
import { betterAuth, type BetterAuthOptions } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "@/db/schema";
import { db } from "@/db/db";
import { resend } from "@/email/resend";
import { ResetPasswordEmailTemplate } from "@/email/email-template";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    schema: schema,
    provider: "pg",
  }),
  user: {
    additionalFields: {
      premium: {
        type: "boolean",
        required: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
    requireEmailVerification: true,
    async sendResetPassword({user, url}) {
      await resend.emails.send({
        to : user.email,
        from : process.env.USER_EMAIL!,
        subject : "Reset Password - DevSell",
        react : await ResetPasswordEmailTemplate({
          link: url
        })
      })
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user }) => {
      await SendVerificationEmail(user.id, user.email);
    },
     
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL!,  
} satisfies BetterAuthOptions);
