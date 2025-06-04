import { db } from "@/db/db";
import { user } from "@/db/schema";
import { verifyEmailToken } from "@/lib/generat-token";
import { AuthMiddleware } from "@/middleware/auth";
import { createServerFn } from "@tanstack/react-start";

import { eq } from "drizzle-orm";
import { z } from "zod";

const verifyEmailSchema = z.object({
  token: z.string(),
});

export const getUserId = createServerFn({ method: "GET" })
  .middleware([AuthMiddleware])
  .handler(async ({ context }) => {
    return context?.user?.id;
  });

export const validateToken = createServerFn({ method: "POST" })
  .validator(verifyEmailSchema)
  .handler(async (context) => {
    const { token } = context?.data;
    if (!token) {
      throw new Error("Token not found!");
    }
    const data = verifyEmailToken(token as string);

    if (!data || !data.userId || !data.email) {
      throw new Error("Invalid token data");
    }
    if (data.purpose !== "email-verification") {
      throw new Error("Invalid token purpose");
    }
    const result = await db
      .update(user)
      .set({
        emailVerified: true,
        email: data.email,
      })
      .where(eq(user.id, data.userId))
      .returning();

    if (result.length === 0) {
      throw new Error("User not found");
    }

    return {
      success: true,
      message: "Email verified successfully",
      user: {
        id: result[0].id,
        email: result[0].email,
        emailVerified: result[0].emailVerified,
      },
    };
  });

export const isAuthenticated = createServerFn({ method: "GET" })
  .middleware([AuthMiddleware])
  .handler(async ({ context }) => {
    try {
      // Check if user exists in context (from middleware)
      if (!context?.user?.id) {
        return {
          isAuthenticated: false,
          user: null,
          needsOnboarding: false,
        };
      }

      // Get full user data including onboarding status
      const userData = await db
        .select({
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
          image: user.image,
        })
        .from(user)
        .where(eq(user.id, context.user.id))
        .limit(1);

      if (userData.length === 0) {
        return {
          isAuthenticated: false,
          user: null,
          needsOnboarding: false,
        };
      }

      const currentUser = userData[0];

      return {
        isAuthenticated: true,
        user: currentUser,
      };
    } catch (error) {
      console.error("Error checking authentication:", error);
      return {
        isAuthenticated: false,
        user: null,
        needsOnboarding: false,
      };
    }
  });
