import "./Gallery.css";

import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";

function Gallery() {
  return (
    <section className="gallery" id="gallery" data-aos="zoom-in">

      <h2>Our Gallery</h2>

      <div className="gallery-grid">
        <img src={img4} alt="Luxury Bus Fleet" />
        <img src={img2} alt="Garage" />
        <img src={img3} alt="Mountain Road" />
      </div>

    </section>
  );
}

export default Gallery;