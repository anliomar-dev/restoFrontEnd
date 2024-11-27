import { createPortal } from 'react-dom';
import logo from '../assets/images/logo.svg';
import CallToActionBtn from "./common/callToActionBtn.jsx";
import BurgerIcon from "./common/burgerIcon.jsx";
import {useEffect, useState} from "react";
import '../assets/styles/navbar.css'
import DropdownCategoriesDishes from "./common/DropdownCategoriesDishes.jsx";
import MenuSmallScreen from "./common/menuSmallScreen.jsx";


function Navbar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
	// scroll to the section of the hash
    useEffect(() => {
        const hash = window.location.hash; // get the hash of the url

        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

	// show or hide menu on small screen
    const handleShowMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

	{/*hide the menu when the window is enlarged*/}
	useEffect(() => {
		const checkScreenSize = () => {
			if(window.innerWidth >= 990 && menuIsOpen) {
				setMenuIsOpen(false);
			}
		};
		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	}, [menuIsOpen]);

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
	              {/*display links for all catégories(starters, lunch, dinner ...)*/}
                  <DropdownCategoriesDishes onclick={handleShowMenu}/>
              </li>
              <li className="mx-2 py-2 px-3"><a href="/#contact">Contact</a></li>
          </ul>
            <div className="navbar-reservation">
                <CallToActionBtn
                  isBtn={false} link="#reservation"
                  text="Réserver une table"
                  className="bg-accent text-white hover:bg-accentHover rounded-2xl btn-sm reservation-btn"/>
            </div>
	        {/*button to open and close menu in small screen*/}
            <div className="px-3 burger-button">
                <BurgerIcon onChange={handleShowMenu} isMenuOpen={menuIsOpen} />
            </div>
        </nav>
          {menuIsOpen && (
            <>
                {createPortal(
                  <MenuSmallScreen onClick={handleShowMenu} />,
                  document.body
                )}
	            {/*overlay while menu is display in small screen*/}
                {createPortal(
                  <div className="fixed top-20 left-0 overlay w-full h-full bg-neutral-800 opacity-70 z-40">
                      <h1></h1>
                  </div>,
                  document.body
                )}
            </>
          )}

      </header>
    );
}


export default Navbar;
