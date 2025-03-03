import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zoraiz Khan - Portfolio",
  description: "A portfolio website",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_30%,rgba(59,130,246,0.3),rgba(22,78,142,0.08))]">
        </div>
        {children}
      </body>
    </html>
  );
}