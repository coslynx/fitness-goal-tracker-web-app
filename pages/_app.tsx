"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { store } from "@/store";
import { ZustandProvider } from "zustand";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">
        <ThemeProvider attribute="class">
          <SessionProvider>
            <ZustandProvider store={store}>
              <Toaster position="top-center" reverseOrder={false} />
              {children}
            </ZustandProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}