"use client";

import "@/styles/globals.css";
import clsx from "clsx";
import { SessionProvider } from "next-auth/react";

import { fontSans } from "@/config/fonts";
import { ThemeProvider } from "next-themes";
import Metadata from "@/components/metadata";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx("font-sans antialiased m-0 p-0", fontSans.variable)}
      >
        <Metadata title="" url="" />
        <ThemeProvider defaultTheme="dark" attribute="class">
          <SessionProvider>
            {children}
            {/* <Footer /> */}
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>                   
  );
}
