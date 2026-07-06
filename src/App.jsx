import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
    </>
  )
}

export default App;
