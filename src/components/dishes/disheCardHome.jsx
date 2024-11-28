import {motion} from "framer-motion";
import {variantsSoloElement} from "../../utils.js";


function DisheCardHome(props) {
	return (
	  <motion.div key={props.id} className="flex flex-col items-center max-w-96"
	       initial="hidden"
	       whileInView="visible"
	       variants={variantsSoloElement}
	       viewport={{ once: true, amount: 0.5 }}
	  >
		  <div className={`relative w-full img-menu-${props.index}`}
		       style={{paddingTop: '56.25%'}}> {/* Aspect ratio 16:9 */}
			  <img className="absolute top-0 left-0 w-full h-full object-cover rounded-md mb-4"
			       src={props.image} alt={props.name}/>
		  </div>
		  <div className={`flex flex-col items-center w-full pt-3 dish-body-${props.index}`}>
			  <h2 className="text-2xl mb-1 pt-3">{props.name}</h2>
			  <p className="pb-2 font-defaultFont text-gray-400 text-center">{props.ingredients}</p>
			  <p className="text-lg font-bold text-accentHover">{props.price} <strong>€</strong></p>
		  </div>
	  </motion.div>
	)
}

export default DisheCardHome;