import type { Metadata, Viewport } from 'next'
import { Assistant, Heebo, Playfair_Display } from 'next/font/google'
import './globals.css'

const assistant = Assistant({
  variable: '--font-assistant',
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const heebo = Heebo({
  variable: '--font-heebo',
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'רוני לוגסי כהן | אשת תקשורת, מנחת כנסים ומראיינת',
  description:
    'רוני לוגסי כהן – אשת תקשורת, מנחת כנסים ופאנלים, מראיינת, מגישת רדיו ופודקאסטים ויוצרת תוכן. מעל 25 שנות ניסיון ביצירת שיחות שמחברות בין אנשים.',
}

export const viewport: Viewport = {
  themeColor: '#F5F0E8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${assistant.variable} ${heebo.variable} ${playfair.variable}`}
      style={{ backgroundColor: 'var(--background)' }}
    >
      <body style={{ fontFamily: 'var(--font-sans)', WebkitFontSmoothing: 'antialiased' }}>
        {children}
      </body>
    </html>
  )
}
