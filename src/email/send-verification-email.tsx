import { db } from "@/db/db";
import { verification } from "@/db/schema";
import { generateEmailVerificationToken } from "@/lib/generat-token";
import { nanoid } from "nanoid";
import { resend } from "./resend";
import { toast } from "sonner";
import { VerifyEmailTemplate } from "./email-template";

export const SendVerificationEmail = async (userId: string, email: string) => {
  try {
    const token = generateEmailVerificationToken(userId, email);
    const tokenExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await db.insert(verification).values({
      id: nanoid(),
      userId: userId,
      identifier: email,
      value: token,
      expiresAt: tokenExpiresAt,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const verificationUrl = `${process.env.APP_URL}/verify-email?token=${token}`;

    const { error } = await resend.emails.send({
      from: process.env.USER_EMAIL!,
      to: email,
      subject: "Email verification for DevSell",
      react: await VerifyEmailTemplate({
        link: verificationUrl,
      }),
    });

    if (error) {
      toast("Can't verify email!");
    }
  } catch (error) {
    console.log(error);
    toast("Internal Server errro!");
  }
};

