import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function DropdownPlats (){
    return (
      <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="m-1">Hover</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                  <Link to="/starters">Starters</Link>
              </li>
              <li>
                  <Link to="/breakfast">breakfast</Link>
              </li>
              <li>
                  <Link to="/lunch">Lunch</Link>
              </li>
              <li>
                  <Link to="/dinner">Dinner</Link>
              </li>
          </ul>
      </div>
    )
}

function Navbar() {
    return (
      <header>
      <nav className="navbar d-flex justify-around align-items-center">
              <div className="navbar-brand">
                  <img src={logo} alt="restaurant logo"/>
              </div>
              <ul className="navbar-menu flex">
                  <li>
                      <Link to="/">Acceuil</Link>
                  </li>
                  <li><a href="#apropos">Apropos</a></li>
                  <li><a href="#menu">Menu</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#gallerie">Gallerie</a></li>
                  <li><a href="#chefs">Chefs</a></li>
                  <li>
                      <DropdownPlats />
                  </li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
              <div className="navbar-reservation">
                  <a href="#reservation" className="reservation-btn">Réserver une table</a>
              </div>
          </nav>
      </header>
    );
}


export default Navbar;
