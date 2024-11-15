import React from "react"
import Header from "./Component/Head/Header"
import "./App.css"
import Home from "./Component/Hero/Home"
import Features from "./Component/Features/Features"
import Portfolio from "./Component/Portfolio/Portfolio"
import Resume from "./Component/Resume/Resume"
import Blog from "./Component/Blog/Blog"
import Contact from "./Component/Contact/Contact"
import Education from "./Component/Education/Education"
import Certificate from "./Component/Certificate/Certificate"
import Skiils from "./Component/Skill/Skills"
import Tools from "./Component/Tools/Tools"
import Social from "./Component/Social/Social"
import Design from "./Component/Design/Design"
import Footer from "./Component/Footer/Footer"
import About from "./Component/About/About"
import Profile from "./Component/Profile/Profile"
import Freelancer from "./Component/Freelancer/Freelancer"


const App = () => {
  return (
  <>
  
  <Header />
  <Home />
  <br />
  <About />
  <br />
  {/* <Features /> */}
  <Education />
  <Resume />
  <Freelancer />
  <Portfolio />
  <Certificate />
  <Skiils />
  <Tools />
  <Blog />
  <Social />
  <Profile />
  <Design />
  <Contact />
  <Footer />
  </>
  )
}

export default App