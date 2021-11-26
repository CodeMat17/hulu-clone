import '../styles/globals.css'
import Header from "../components/Header"
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
