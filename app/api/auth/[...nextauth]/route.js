//app>api>[...nextauth]>route.js

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import dbConnect from "@/lib/db";

import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: { scope: "read:user user:email" },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      authorization: {
        params: { scope: "r_liteprofile r_emailaddress" },
      },
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("🟡 Received credentials:", credentials);

        try {
          await dbConnect();
          console.log("🔗 Connected to DB");
          const allUsers = await User.find({});
          console.log("👥 All users in DB:", allUsers);

          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            console.log("🔴 User not found with email:", credentials.email);
            throw new Error("User not found");
          }

          console.log("🔐 Stored hash:", user.password);
          console.log("🔐 Input password:", credentials.password);

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          console.log("🟢 Password match:", isPasswordCorrect);

          if (!isPasswordCorrect) {
            throw new Error("Invalid password");
          }

          console.log("✅ Authorized user:", user.email);

          return { id: user._id.toString(), email: user.email };
        } catch (error) {
          console.error("❌ Error in authorize:", error);
          throw new Error("Internal authorization error");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
