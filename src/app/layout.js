import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Zoraiz Khan - Portfolio',
  description:
    'Software Engineer and Computer Science graduate from the University of Calgary. Portfolio of projects, skills, and experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','light');}}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-plus-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
