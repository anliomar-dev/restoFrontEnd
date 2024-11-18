import { useState } from "react";
import useFetchDishesByCategory from "../hooks/useFetch";
import MenuButton from "./forms/menuButton";

const menuButtons = ["starter", "breakfast", "lunch", "dinner", "dessert"];

function MenuSection() {
	// Use useFetch hook to get data
	const { loading, error, dishes, setCategory, category } =
	  useFetchDishesByCategory("starter");

	//handle the state of active button
	const [activeBtn, setActiveBtn] = useState("starter");

	return (
	  <section
	    className="menu-section pt-14 flex flex-col items-center px-8 md:px-28"
	    id="menu">
		  <div className="pb-14 flex flex-col items-center">
			  <h2 className="font-defaultFont text-md">Menu</h2>
			  <p className="text-6xl font-headingFont font-bold text-headingTitle mt-3">
				  <span>Decouvrez</span>
				  <span className="text-accentHover">Nos Menus</span>
			  </p>
		  </div>
		  <ul className="flex gap-6 menu-buttons">
			  {menuButtons.map((menuButton) => (
				<li key={menuButton}>
					<MenuButton
					  btnName={menuButton}
					  activeBtn={activeBtn}
					  setCategory={setCategory} // Passe setCategory pour mettre à jour la catégorie
					  setActiveBtn={setActiveBtn} // Passe setActiveBtn pour gérer l'état actif du bouton
					>
						{menuButton.charAt(0).toUpperCase() + menuButton.slice(1)}
					</MenuButton>
				</li>
			  ))}
		  </ul>
		  <div className="py-8 flex flex-col items-center">
			  <div>Menu</div>
			  <p className="text-accentHover text-4xl">
				  {category.charAt(0).toUpperCase() + category.slice(1)}
			  </p>
		  </div>
		  <div className="grid grid-cols-3 gap-16 gap-x-8">
			  {/* Affiche les plats en fonction de la catégorie sélectionnée */}
			  {loading ? (
				<p>Loading...</p>
			  ) : error ? (
				<p>{error}</p>
			  ) : (
				dishes.results.slice(0, 3).map((dish) => (
				  <div key={dish.id} className="flex flex-col items-center max-w-96">
					  <div className="relative w-full" style={{paddingTop: '56.25%'}}> {/* Aspect ratio 16:9 */}
						  <img className="absolute top-0 left-0 w-full h-full object-cover rounded-md mb-4"
						       src={dish.image} alt={dish.name}/>
					  </div>
					  <h2 className="text-2xl mb-1 pt-3">{dish.name}</h2>
					  <p className="pb-2 font-defaultFont text-gray-400 text-center">{dish.ingredients}</p>
					  <p className="text-lg font-bold text-accentHover">{dish.price}</p>
				  </div>
				))
			  )}
		  </div>
		  <div className="flex pt-10">
			  <a href="" className="text-lg">voir plus</a>
		  </div>
	  </section>
	);
}

export default MenuSection;