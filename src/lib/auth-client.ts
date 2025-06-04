import { createAuthClient } from "better-auth/react";

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  getSession,
  sendVerificationEmail,
  forgetPassword,
  resetPassword,
  updateUser,
} = createAuthClient({
  baseURL: "http://localhost:3000",
  redirectTo: "/",
});
  
