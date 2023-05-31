import { Roboto, } from '@next/font/google'
import '@/styles/globals.css'
import Footer from '@/components/Footer/Footer'
import NavbarHome from '@/components/Navbar/NavbarHome'
import { useEffect } from 'react'
import NavbarSliceBar from '@/components/Slicebar/Navbar'

const inter = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <NavbarHome />
      {/* <NavbarSliceBar /> */}
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
