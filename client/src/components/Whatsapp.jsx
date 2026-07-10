import "./Whatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <a
      href="https://wa.me/919881656878?text=Hi%20Rudra%20Travels,%20I%20want%20to%20book%20a%20trip."
      className="whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default Whatsapp;