import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_vw9svaa",
        "template_yvqcwh7",
        form.current,
        "O_vculzdNORnhOZeG"
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result);
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("ERROR:", error);
          alert("Failed to Send Message!");
        }
      );
  };

  return (
    <section className="contact" id="contact" data-aos="fade-left">

      <h2>Contact Us</h2>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>📍 Pune, Maharashtra</p>

          <p>📞 +91 9881656878</p>

          <p>📧 rudrabhanwase2005@gmail.com</p>

          <p>
            We are available 24×7 for tours, traveller booking and heavy vehicle services.
          </p>

        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;