import './globals.css'
import { Figtree } from 'next/font/google';
import localFont from 'next/font/local'
import { Header } from './_components/header';
import { Footer } from './_components/footer';

const figtree = Figtree({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-figtree',
})

const yekanbakh = localFont({
  src: [
    {
      path: '../../public/fonts/YekanBakh/YekanBakh-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../public/fonts/YekanBakh/YekanBakh-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/YekanBakh/YekanBakh-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/YekanBakh/YekanBakh-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/YekanBakh/YekanBakh-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/YekanBakh/YekanBakh-Black.woff2',
      weight: '900',
      style: 'normal'
    },
  ],
  variable: '--font-yakanbakh'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html dir='rtl' className={`${yekanbakh.variable} ${figtree.variable} dark`}>
      <body className='min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content'>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
