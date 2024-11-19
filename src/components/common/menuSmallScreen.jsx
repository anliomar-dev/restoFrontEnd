import DropdownCategoriesDishes from "./DropdownCategoriesDishes.jsx";
import CallToActionBtn from "./callToActionBtn.jsx";

function MenuSmallScreen(){
	return (
	  <div className="MenuSmallScreen fixed top-20 left-0 p-10 w-full h-full">
		  <nav className="h-96 flex flex-col gap-y-6 py-5 bg-blue-300 ps-10">
			  <ul className="flex flex-col">
				  <li className="mx-2 py-3 px-3"><a href="/#Home">Acceuil</a></li>
				  <li className="mx-2 py-2 px-3"><a href="/#about-section">Apropos</a></li>
				  <li className="mx-2 py-2 px-3"><a href="/#menu">Menu</a></li>
				  <li className="mx-2 py-2 px-3"><a href="/#gallery">Gallerie</a></li>
				  <li className="mx-2 py-2 px-3 dropdown dropdown-hover pe-2">
					  <DropdownCategoriesDishes/>
				  </li>
				  <li className="mx-2 py-2 px-3"><a href="/#contact">Contact</a></li>
			  </ul>
			  <div className="">
				  <CallToActionBtn
					isBtn={false} link="#reservation"
					text="Réserver une table"
					className="bg-accent text-white hover:bg-accentHover rounded-2xl btn-sm reservation-btn"/>
			  </div>
		  </nav>
	  </div>
	)
}

export default MenuSmallScreen;