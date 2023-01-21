import { Html, Head, Main, NextScript } from 'next/document'
import NavbarHome from '@/components/Navbar/NavbarHome'
import Footer from '@/components/Footer/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=''>
        <NavbarHome />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
