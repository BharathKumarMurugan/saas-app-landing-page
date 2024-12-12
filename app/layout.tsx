import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xora | SaaS Landing Page",
  description: "A SaaS Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
