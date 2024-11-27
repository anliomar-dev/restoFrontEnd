import DropdownCategoriesDishes from "./DropdownCategoriesDishes.jsx";
import CallToActionBtn from "./callToActionBtn.jsx";

function MenuSmallScreen({ onClick}) {
	return (
	  <div className="MenuSmallScreen fixed top-20 left-0 py-6 px-5 w-full h-full z-50">
		  <nav className="h-[calc(100%-90px)] flex flex-col gap-y-6 py-5 ps-10 rounded-lg shadow-lg bg-white">
			  <ul className="flex flex-col">
				  <li className="mx-2 py-3 px-3">
					  <a href="/#Home" onClick={onClick}>Acceuil</a>
				  </li>
				  <li className="mx-2 py-2 px-3">
					  <a href="/#about-section" onClick={onClick}>À propos</a>
				  </li>
				  <li className="mx-2 py-2 px-3">
					  <a href="/#menu" onClick={onClick}>Menu</a>
				  </li>
				  <li className="mx-2 py-2 px-3">
					  <a href="/#gallery" onClick={onClick}>Galerie</a>
				  </li>
				  <li className="mx-2 py-2 px-3 dropdown dropdown-hover pe-2">
					  <DropdownCategoriesDishes onclick={onClick} />
				  </li>
				  <li className="mx-2 py-2 px-3">
					  <a href="/#contact" onClick={onClick}>Contact</a>
				  </li>
			  </ul>
			  <div>
				  <CallToActionBtn
					isBtn={false}
					link="#reservation"
					text="Réserver une table"
					onClick={onClick}
					className="bg-accent text-white hover:bg-accentHover rounded-2xl btn-sm reservation-btn"
				  />
			  </div>
		  </nav>
	  </div>
	);
}

export default MenuSmallScreen;
