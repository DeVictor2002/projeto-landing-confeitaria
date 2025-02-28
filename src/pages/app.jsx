import './app.css'
import Header from '../components/header/header'
import Hero from '../components/hero/hero'
import About from '../components/about/about'
import Menu from '../components/menu/menu'

export function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Hero />
        <About />
        <Menu />
      </div>
    </>
  )
}

export default App
