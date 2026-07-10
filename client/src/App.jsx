import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Fleet from "./components/Fleet";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Services />
      <Gallery />
      <Fleet />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default App;