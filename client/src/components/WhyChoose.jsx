import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why">

      <h2>Why Choose Us?</h2>

      <div className="why-grid">

        <div className="why-card">
          <span>🚌</span>
          <h3>Comfortable Travel</h3>
          <p>Safe and luxury travel experience for every journey.</p>
        </div>

        <div className="why-card">
          <span>🛠️</span>
          <h3>Expert Garage</h3>
          <p>Professional heavy vehicle repair and maintenance.</p>
        </div>

        <div className="why-card">
          <span>⭐</span>
          <h3>Trusted Service</h3>
          <p>Hundreds of satisfied customers trust our service.</p>
        </div>

        <div className="why-card">
          <span>📞</span>
          <h3>24×7 Support</h3>
          <p>Always available whenever you need assistance.</p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;