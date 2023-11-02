import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir='rtl'>
      <body className='flex flex-col font-bold uppercase min-h-screen'>
        <header className='bg-gray-400 flex flex-col justify-center items-center h-20'>
          Header
        </header>
        <div className='flex-1 flex'>
          {children}
        </div>
        <footer className='bg-gray-400 flex flex-col justify-center items-center h-20'>
          Footer
        </footer>
      </body>
    </html>
  )
}
