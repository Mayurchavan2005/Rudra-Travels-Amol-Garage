import "../Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo-box">
        <img src="/logo.png" alt="Rudra Travels Logo" className="logo" />
        <h2>Rudra Travels</h2>
      </div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#fleet">Fleet</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;