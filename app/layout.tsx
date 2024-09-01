import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen w-full  flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col items-center">
              <nav className="w-full fixed pointer-events-auto z-10 top-0  flex justify-center h-20">
                <Navbar />
                <div className="flex bg-[#1f2937] border border-1 border-[#546276] rounded-lg flex-col w-16 justify-center items-center">
                  <ThemeSwitcher />
                </div>
              </nav>
              <div className="flex relative  h-full  w-full flex-col gap-20">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 ">
                <Footer />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
