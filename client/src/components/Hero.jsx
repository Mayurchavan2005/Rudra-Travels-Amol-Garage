import hero from "../assets/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <img src={hero} alt="Rudra Travels" />

      <div className="overlay"></div>

      <div className="content">
        <span className="tagline">
          🚍 Tours • Travels • Heavy Vehicle Garage
        </span>

        <h1>Rudra Travels & Amol Garage</h1>

        <p>
          Your Trusted Partner for Tours, Taxi Booking, Bus Rental &
          Heavy Vehicle Garage Services. Safe, Comfortable and Reliable
          Travel Across Maharashtra.
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/919881656878?text=Hi%20Rudra%20Travels,%20I%20want%20to%20book%20a%20vehicle."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="book-btn">📲 Book on WhatsApp</button>
          </a>

          <a href="tel:+919881656878">
            <button className="call-btn">📞 Call Now</button>
          </a>
        </div>

        <div className="hero-features">
          <span>✔ Safe Journey</span>
          <span>✔ 24×7 Support</span>
          <span>✔ Professional Drivers</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;