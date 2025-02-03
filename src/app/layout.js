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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        <div className="fixed z-50 bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg 
        [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background pointer-events-none">
        </div>
        {children}
      </body>
    </html>
  );
}