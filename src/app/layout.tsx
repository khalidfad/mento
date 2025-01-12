import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import "./globals.css";

const fontAnuphan = Anuphan({
  variable: "--font-Anuphan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mento",
  description: "Mentor aims to connect ambitious individuals to their mentors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontAnuphan.variable} min-h-screen flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
