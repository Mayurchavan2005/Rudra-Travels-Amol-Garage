import "./Reviews.css";

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <h2>What Our Customers Say</h2>

      <div className="review-container">

        <div className="review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            Excellent service. Clean traveller, professional driver
            and very comfortable journey.
          </p>
          <h4>— Rahul Patil</h4>
        </div>

        <div className="review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            Best heavy vehicle garage. Quick service and reasonable
            pricing.
          </p>
          <h4>— Amit Shinde</h4>
        </div>

        <div className="review-card">
          <h3>⭐⭐⭐⭐⭐</h3>
          <p>
            We booked a traveller for Shirdi tour. Amazing experience
            and punctual service.
          </p>
          <h4>— Sneha Jadhav</h4>
        </div>

      </div>
    </section>
  );
}

export default Reviews;