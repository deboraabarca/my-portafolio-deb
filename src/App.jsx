
import Header from './components/Header'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Proyects from './components/Proyects'
import Contact from './components/Contact'
import Scrolltotop from './components/Scrolltoptop'

function App() {
  return (
    <div>
      <Header />
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Proyects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Scrolltotop />
    </div>
  )
}

export default App