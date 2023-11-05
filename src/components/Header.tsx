import '../assets/styles/components/header.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { SidebarComponent } from './SidebarComponent';

interface Props {
  activeLink: string;
}

export const Header = ({ activeLink }: Props) => {

  const { isOpen, setIsOpen }: any = useContext(SidebarContext);

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#"><img src="./images/logo-navbar.png" alt="Logo de Hecho en Perú" /></a>
        </div>
        <div className="nav-responsive">
          <div className="menu d-flex justify-content-around">
            <Link className={`menu-item ${activeLink === 'home' && 'active'}`} to="/">Home</Link>
            <Link className={`menu-item ${activeLink === 'catalog' && 'active'}`} to="/catalog">Catalog</Link>
            <Link className={`menu-item ${activeLink === 'regions' && 'active'}`} to="/regions">Regions</Link>
            <Link className={`menu-item ${activeLink === 'about-us' && 'active'}`} to="/about-us">About us</Link>
            <Link className={`menu-item ${activeLink === 'contact-us' && 'active'}`} to="/contact-us">Contact us</Link>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Enter your category" />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="icons d-flex justify-content-around">

          <i
            id="cart-icon"
            className="fas fa-shopping-cart"
            onClick={
              () => {
                setIsOpen(!isOpen);
              }
            }></i>

          <SidebarComponent />

          <a href="./public/login.html"><i className="fas fa-user"></i></a>
          <i className="fa-solid fa-bars hamburger inactive"></i>
        </div>
      </nav>
    </header >
  )
};