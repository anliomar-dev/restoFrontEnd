import { createPortal } from 'react-dom';
import logo from '../assets/images/logo.svg';
import CallToActionBtn from "./common/callToActionBtn.jsx";
import BurgerIcon from "./common/burgerIcon.jsx";
import {useEffect} from "react";
import '../assets/styles/navbar.css'
import DropdownCategoriesDishes from "./common/DropdownCategoriesDishes.jsx";


function Navbar() {
    useEffect(() => {
        const hash = window.location.hash; // get the hash of the url

        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    return (
      <header className="sticky top-0">
        <nav className="navbar bg-background d-flex justify-around align-items-center py-5">
              <div className="navbar-brand">
                  <img src={logo} alt="restaurant logo" className="" />
              </div>
              <ul className="navbar-menu flex">
                  <li className="mx-2 py-3 px-3"><a href="/#Home">Acceuil</a></li>
                  <li className="mx-2 py-2 px-3"><a href="/#about-section">Apropos</a></li>
                  <li className="mx-2 py-2 px-3"><a href="/#menu">Menu</a></li>
                  <li className="mx-2 py-2 px-3"><a href="/#gallery">Gallerie</a></li>
                  <li className="mx-2 py-2 px-3 dropdown dropdown-hover pe-2">
                      <DropdownCategoriesDishes />
                  </li>
                  <li className="mx-2 py-2 px-3"><a href="/#contact">Contact</a></li>
              </ul>
            <div className="navbar-reservation">
                <CallToActionBtn
                  isBtn={false} link="#reservation"
                  text="Réserver une table"
                  className="bg-accent text-white hover:bg-accentHover rounded-2xl btn-sm reservation-btn"/>
            </div>
            <div className="px-3 burger-button">
                <BurgerIcon/>
            </div>
        </nav>
      </header>
    );
}


export default Navbar;
