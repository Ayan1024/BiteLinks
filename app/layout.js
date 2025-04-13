import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "./theme/ThemeContext";
import Background from "@/components/Background";
import SessionWrapper from "@/components/SessionWrapper";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "BiteLinks - Bite your URL",
  description: "Bitelinks helps you shorten your URLs",
};

// ✅ Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body>
        {/* ✅ ThemeProvider wraps the whole UI, including background */}
       <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
           <SessionWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
           </SessionWrapper>
        </ThemeProvider>
      </body>
     
    </html>
  );
}
