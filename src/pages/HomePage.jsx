import About from "../Components/About/About"
import Home from "../Components/Home/Home"
import Projects from "../Components/Projects/Projects"
import Skills from "../Components/Skills/Skills"
import Navbar from "../Components/Navbar/Navbar"
import Contact from "../Components/Contact/Contact"

function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default HomePage
