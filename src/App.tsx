import Solutions from "./components/Solutions/Solutions"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Features from "./components/Features/Features"
import Testimonials from "./components/Testimonials/Testimonials"
import Services from "./components/Servicesr/Services"
import Aboutus from "./components/Aboutus/Aboutus"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Solutions />
        <Features />
        <Testimonials />
        <Services />
        <Aboutus />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
