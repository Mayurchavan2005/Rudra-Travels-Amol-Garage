import "./Fleet.css";
import bus from "../assets/gallery4.jpg";

function Fleet() {
  return (
    <section className="fleet" id="fleet" data-aos="fade-right">

      <div className="fleet-image">
        <img src={bus} alt="Luxury Traveller" />
      </div>

      <div className="fleet-content">
        <h2>Luxury Traveller Fleet</h2>

        <p>
          We provide premium 17-seater luxury traveller buses
          for family tours, corporate trips, weddings and
          outstation travel with maximum comfort.
        </p>

        <ul>
          <li>✔ 17 Seater Luxury Traveller</li>
          <li>✔ Fully Air Conditioned</li>
          <li>✔ Pushback Seats</li>
          <li>✔ GPS Tracking</li>
          <li>✔ Music System</li>
          <li>✔ Professional Drivers</li>
        </ul>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>

          <a
            href="https://wa.me/919881656878?text=Hi%20Rudra%20Travels,%20I%20want%20to%20book%20a%2017-seater%20Luxury%20Traveller.%20Please%20share%20the%20price%20and%20availability."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Book Your Trip</button>
          </a>

          <a
            href="https://maps.app.goo.gl/HHCwDMYsdaqMzrGu8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Location</button>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Fleet;