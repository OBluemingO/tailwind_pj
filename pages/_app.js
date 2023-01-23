import { Roboto, } from '@next/font/google'
import '@/styles/globals.css'
import Footer from '@/components/Footer/Footer'
import NavbarHome from '@/components/Navbar/NavbarHome'

const inter = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavbarHome />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
