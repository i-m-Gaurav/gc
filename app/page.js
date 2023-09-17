import Image from 'next/image'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      
      <Main/>
      <Services/>
      <About/>
      <Contact/>
    </>
  )
}
