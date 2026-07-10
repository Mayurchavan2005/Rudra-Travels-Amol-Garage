import "./Services.css";

function Services() {
  return (
    <section className="services" id="services" data-aos="fade-up">
      <h2>Our Services</h2>

      <div className="cards">

        <div className="card">
          <h3>Travel Booking</h3>
          <p>Safe, comfortable and affordable travel for families and groups.</p>
        </div>

        <div className="card">
          <h3>Heavy Vehicle Garage</h3>
          <p>Professional repair, maintenance and servicing for heavy vehicles.</p>
        </div>

        <div className="card">
          <h3>24×7 Support</h3>
          <p>Our team is always available whenever you need assistance.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;