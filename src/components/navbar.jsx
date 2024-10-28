import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function DropdownPlats (){
    return (
      <>
          <div tabIndex={0} role="button" className="m-1">Plats</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li className="link-dropdown">
                  <Link to="/starters">Starters</Link>
              </li>
              <li className="link-dropdown">
                  <Link to="/breakfast">breakfast</Link>
              </li>
              <li className="link-dropdown">
                  <Link to="/lunch">Lunch</Link>
              </li>
              <li className="link-dropdown">
                  <Link to="/dinner">Dinner</Link>
              </li>
          </ul>
      </>
    )
}

function Navbar() {
    return (
      <header>
        <nav className="navbar bg-background d-flex justify-around align-items-center py-4">
              <div className="navbar-brand">
                  <img src={logo} alt="restaurant logo" className="" />
              </div>
              <ul className="navbar-menu flex">
                  <li className="mx-2 py-3 px-3">
                      <Link to="/">Acceuil</Link>
                  </li>
                  <li className="mx-2 py-3 px-3"><a href="#apropos">Apropos</a></li>
                  <li className="mx-2 py-3 px-3"><a href="#menu">Menu</a></li>
                  <li className="mx-2 py-3 px-3"><a href="#services">Services</a></li>
                  <li className="mx-2 py-3 px-3"><a href="#gallerie">Gallerie</a></li>
                  <li className="mx-2 py-3 px-3"><a href="#chefs">Chefs</a></li>
                  <li className="mx-2 py-3 px-3 dropdown dropdown-hover pe-2">
                      <DropdownPlats />
                  </li>
                  <li className="mx-2 py-3 px-3"><a href="#contact">Contact</a></li>
              </ul>
              <div className="navbar-reservation">
                  <a
                    href="#reservation"
                    className="btn bg-accent hover:bg-accentHover
                    rounded-2xl btn-sm text-white reservation-btn"
                  >
                      Réserver une table
                  </a>
              </div>
          </nav>
      </header>
    );
}


export default Navbar;
