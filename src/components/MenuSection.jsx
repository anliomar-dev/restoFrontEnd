import { useState } from "react";
import useFetchDishesByCategory from "../hooks/useFetch";
import MenuButton from "./forms/menuButton";
import {Link} from "react-router-dom";
import CallToActionBtn from "./common/callToActionBtn.jsx";
import {motion } from "framer-motion"

const menuButtons = ["starter", "breakfast", "lunch", "dinner", "dessert"];
// Variants for the container to stagger child animations
const containerVariants = {
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
	hidden: { opacity: 0 },
}

// Individual item animation (fading in and sliding up)
const item = {
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	hidden: { opacity: 0, y: 100,},
}

const variantsSoloElement = {
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	hidden: { opacity: 0, y: 80 },
}

function MenuSection() {
	// Use useFetch hook to get data
	const { loading, error, dishes, setCategory, category, page, setPage } =
	  useFetchDishesByCategory("starter");
	//handle the state of active button
	const [activeBtn, setActiveBtn] = useState("starter");

	return (
	  <motion.section
	    className="menu-section pt-14 flex flex-col items-center px-8 md:px-28"
	    id="menu"
	  >
		  <motion.div className="flex flex-col items-center"
	          initial="hidden"
	          whileInView="visible"
	          variants={containerVariants}
	          viewport={{ once: true, amount: 0.3 }}
		  >
			  <motion.div className="pb-12 flex flex-col items-center" variants={item}>
				  <p className="text-6xl font-headingFont font-bold text-headingTitle mt-3">
					  <span>Decouvrez</span>
					  <span className="text-accentHover">Nos Menus</span>
				  </p>
			  </motion.div>
			  <motion.ul className="flex justify-center gap-6 flex-wrap menu-buttons" variants={item}>
				  {menuButtons.map((menuButton) => (
				    <li key={menuButton}>
					    <MenuButton
						  btnName={menuButton}
						  activeBtn={activeBtn}
						  setCategory={setCategory} // Passes setCategory to update the category
						  setActiveBtn={setActiveBtn} // Passes setActiveBtn to manage the active button state
						  page={page}
						  resetDefaultPage={setPage}
					    >
						    {menuButton.charAt(0).toUpperCase() + menuButton.slice(1)}
					    </MenuButton>
				    </li>
				  ))}
			  </motion.ul>
		  </motion.div>
		  <motion.div className="py-8 flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              variants={variantsSoloElement}
              viewport={{ once: true, amount: 0.5 }}
		  >
			  <div>Menu</div>
			  <p className="text-accentHover text-4xl">
				  {category.charAt(0).toUpperCase() + category.slice(1)}
			  </p>
		  </motion.div>
		  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 gap-x-8">
			  {/* display dishes by category */}
			  {loading ? (
			    <div className="">
				    <p className="text-lg font-bold">Loading ...</p>
			    </div>
			  ) : error ? (
			    <p>{error}</p>
			  ) : (
			    dishes.results.slice(0, 3).map((dish, index) => (
				  <div key={dish.id} className="flex flex-col items-center max-w-96">
					  <div className={`relative w-full img-menu-${index + 1}`}
					       style={{paddingTop: '56.25%'}}> {/* Aspect ratio 16:9 */}
						  <img className="absolute top-0 left-0 w-full h-full object-cover rounded-md mb-4"
						       src={dish.image} alt={dish.name}/>
					  </div>
					  <div className={`flex flex-col items-center w-full pt-3 dish-body-${index + 1}`}>
						  <h2 className="text-2xl mb-1 pt-3">{dish.name}</h2>
						  <p className="pb-2 font-defaultFont text-gray-400 text-center">{dish.ingredients}</p>
						  <p className="text-lg font-bold text-accentHover">{dish.price} <strong>€</strong></p>
					  </div>
				  </div>
				))
			  )}
		  </div>
		  <div className="flex pt-2">
			  {/*button that redirect to the category page to see all the dishes of the category*/}
			  <CallToActionBtn
			    isBtn={true}
			    className="bg-accent hover:bg-accentHover
			    text-white border-transparent
			    backdrop-brightness-150
			    rounded-3xl btn-md reservation-btn
			    mt-6 transition-colors duration-300
			    "
			  >
				  <Link to={`/dishes/${category}`}>voir plus +</Link>
			  </CallToActionBtn>
		  </div>
	  </motion.section>
	);
}

export default MenuSection;
