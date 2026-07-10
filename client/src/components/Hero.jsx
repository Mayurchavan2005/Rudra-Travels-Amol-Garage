import hero from "../assets/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <img src={hero} alt="hero" />

      <div className="overlay"></div>

      <div className="content">
        <h1>Rudra Travels & Amol Garage</h1>

        <p>
          Your Trusted Partner for Tours, Travels &
          Heavy Vehicle Services
        </p>

        <a
          href="https://wa.me/919881656878?text=Hi%20Rudra%20Travels,%20I%20want%20to%20book%20a%2017-seater%20traveller.%20Please%20share%20the%20details."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Book Now</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;