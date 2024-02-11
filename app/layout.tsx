import type { Metadata } from "next";
import { inter } from "@/public/fonts";
import "./globals.css";
import { AppDescription, AppName } from "@/public/constants";

export const metadata: Metadata = {
  title: `${AppName}`,
  description: `${AppDescription}`,
  icons: {
    icon: [
      {
        url: "/logo.png",
        href: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
