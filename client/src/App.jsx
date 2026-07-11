import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Fleet from "./components/Fleet";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Services />
      <Gallery />
      <Fleet />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
}

export default App;