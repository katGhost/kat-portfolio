import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AN Mogashoa - Portfolio",
  description: "Portfolio of AN Mogashoa, a fullstack developer",
};



export default function RootLayout(z) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}