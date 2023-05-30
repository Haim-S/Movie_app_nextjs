
import '@/styles/globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
// import { Provider } from 'react-redux';
// import { store } from '@/store/store'
import { AuthContextProvider } from '@/context/AuthContext'

export default function App({ Component, pageProps }) {

  return(
  <>
  <AuthContextProvider>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </AuthContextProvider>
  </>
  )
}
