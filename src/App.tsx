import { GlobalStyles } from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Orders } from './components/Orders'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <Footer />
    </>
  )
}
