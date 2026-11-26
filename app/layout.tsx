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

const siteTitle = 'רוני לוגסי כהן | אשת תקשורת, מנחת כנסים ומראיינת'
const siteDescription =
  'רוני לוגסי כהן, אשת תקשורת, מנחת כנסים ופאנלים, מראיינת, מגישת רדיו ופודקאסטים ויוצרת תוכן. מעל 25 שנות ניסיון מול קהל.'

// כשיחובר דומיין אישי, להחליף את הכתובת כאן כדי שהתמונה תופיע בשיתופים
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://landing-page-roni.onrender.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: 'רוני לוגסי כהן',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/media/og-image.jpg', width: 1200, height: 630, alt: 'רוני לוגסי כהן' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/media/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#F5F0E8',
}

// Tells Google who Roni is and what she offers (shown in search results)
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#roni`,
      name: 'רוני לוגסי כהן',
      alternateName: 'Roni Lugasi Cohen',
      url: siteUrl,
      image: `${siteUrl}/media/og-image.jpg`,
      jobTitle: 'אשת תקשורת, מנחת כנסים ופאנלים, מראיינת ומגישת רדיו',
      telephone: '+972-50-777-0071',
      email: 'roni@orencohengroup.com',
      knowsLanguage: ['he', 'en'],
    },
    {
      '@type': 'ProfessionalService',
      name: 'רוני לוגסי כהן | הנחיית כנסים, פאנלים וראיונות',
      url: siteUrl,
      image: `${siteUrl}/media/og-image.jpg`,
      telephone: '+972-50-777-0071',
      email: 'roni@orencohengroup.com',
      areaServed: { '@type': 'Country', name: 'Israel' },
      founder: { '@id': `${siteUrl}/#roni` },
      serviceType: ['הנחיית כנסים ואירועים', 'הנחיית פאנלים', 'ראיונות ופודקאסטים', 'הפקת תוכן לארגונים'],
    },
  ],
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  )
}
