import { Link } from "react-router-dom";
import "../assets/styles/components/footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="logo d-flex justify-content-center align-items-center">
        <a className="text-decoration-none" href="#"><img src="/images/logo-footer.png"
          alt="Logo de Hecho en Perú" /></a>
      </div>
      <div className="footer-navigation">
        <h3>Navigation</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/regions">Regions</Link></li>
          <li><Link to="/about-us">About us</Link></li>
          <li><Link to="/contact-us">Contact us</Link></li>
        </ul>
      </div>
      <div className="footer-payment inline">
        <h3>Payment methods</h3>
        <ul>
          <li><i className="fa-brands fa-cc-visa"></i></li>
          <li><i className="fa-brands fa-cc-mastercard"></i></li>
          <li><i className="fa-brands fa-cc-paypal"></i></li>
        </ul>
        <ul>
          <li><i className="fa-brands fa-cc-diners-club"></i></li>
          <li><i className="fa-brands fa-cc-amex"></i></li>
          <li><i className="fa-solid fa-qrcode"></i></li>
        </ul>
      </div>
      <div className="footer-shipping inline">
        <h3>Shipping methods</h3>
        <ul>
          <li><i className="fas fa-shipping-fast"></i></li>
          <li><i className="fas fa-truck"></i></li>
        </ul>
      </div>
      <div className="footer-social d-inline-block inline">
        <h3>Social media</h3>
        <ul>
          <li><i className="fa-brands fa-facebook"></i></li>
          <li><i className="fa-brands fa-whatsapp"></i></li>
          <li><i className="fab fa-instagram"></i></li>
        </ul>
      </div>
    </footer>
  )
};