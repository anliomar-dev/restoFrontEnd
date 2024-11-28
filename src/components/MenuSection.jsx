import { useState } from "react";
import useFetchDishesByCategory from "../hooks/useFetch";
import MenuButton from "./forms/menuButton";
import {Link} from "react-router-dom";
import CallToActionBtn from "./common/callToActionBtn.jsx";
import {motion } from "framer-motion"
import DisheCardHome from "./dishes/disheCardHome";
import {containerVariants, variantsSoloElement, item} from "../utils.js";

const menuButtons = ["starter", "breakfast", "lunch", "dinner", "dessert"];


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
		  {/* menu section header */}
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
			  {/* menu section nav */}
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
		  {/* menu section current menu (category ) */}
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
		  {/* menu section dishes */}
		  <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 gap-x-8"
		  >
			  {/* display dishes by category */}
			  {loading ? (
			    <div className="">
				    <p className="text-lg font-bold">Loading ...</p>
			    </div>
			  ) : error ? (
			    <p>{error}</p>
			  ) : (
			    dishes.results.slice(0, 3).map((dish, index) => (
			      <DisheCardHome
			        key={dish.id} name={dish.name} index={index + 1}
	                price={dish.price} ingredients={dish.ingredients}
	                image={dish.image}
			      />
				))
			  )}
		  </motion.div>
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
