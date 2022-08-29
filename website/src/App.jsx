import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Cta from "./components/header/Cta";



function App() {
  return (
      <>
          <Header/>
          <Nav/>
          <About/>
          <Experience/>
          <Portfolio/>
          <Testimonials/>
          <Contact/>
      </>
  )
}

export default App;
