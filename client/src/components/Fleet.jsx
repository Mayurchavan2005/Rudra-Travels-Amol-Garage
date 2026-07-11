import "./Fleet.css";
import bus from "../assets/gallery4.jpg";

function Fleet() {
  return (
    <section className="fleet" id="fleet" data-aos="fade-right">

      <div className="fleet-image">
        <img src={bus} alt="17 Seater Luxury Traveller" />
      </div>

      <div className="fleet-content">

        <span className="tagline">🚍 Premium Fleet</span>

        <h2>17 Seater Luxury Traveller</h2>

        <p>
          Travel in comfort with our premium Luxury Traveller.
          Perfect for family tours, corporate trips, weddings,
          airport transfers and outstation journeys across Maharashtra.
        </p>

        <ul>
          <li>✅ 17 Seater Luxury Traveller</li>
          <li>❄ Fully Air Conditioned</li>
          <li>💺 Pushback Comfortable Seats</li>
          <li>📍 GPS Tracking</li>
          <li>🎵 Premium Music System</li>
          <li>👨‍✈️ Experienced Professional Drivers</li>
          <li>🛡 Safe & Comfortable Journey</li>
        </ul>

        <div className="fleet-buttons">

          <a
            href="https://wa.me/919881656878?text=Hi%20Rudra%20Travels,%20I%20want%20to%20book%20a%2017-Seater%20Luxury%20Traveller."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="book-btn">
              📲 Book on WhatsApp
            </button>
          </a>

          <a href="tel:+919881656878">
            <button className="call-btn">
              📞 Call Now
            </button>
          </a>

          <a
            href="https://maps.app.goo.gl/HHCwDMYsdaqMzrGu8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="location-btn">
              📍 View Location
            </button>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Fleet;