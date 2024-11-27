import {motion} from "framer-motion";
import CallToActionBtn from "./common/callToActionBtn.jsx";

// Variants for main container
const containerVariants = {
	visible: {
		transition: {
			staggerChildren: 0.5,
		},
	},
};

// Variants for elements h1, p and button
const itemVariants = {
	hidden: { opacity: 0, y: 20 }, // Début : caché et décalé vers le bas
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Transition : apparait en montant
};

function HeroTexts() {
	return (
	  <motion.div className="hero-body max-w-lg mx-10"
	              initial="hidden"
	              animate="visible"
	              variants={containerVariants}
	  >
		  <motion.h1 className="
			  hero-title font-headingFont font-bold
			  text-headingTitle leading-tight"
		             variants={itemVariants}
		  >
			  Profitez d&#39;une nourriture délicieuse et saine
		  </motion.h1>
		  <motion.p className="font-defaultFont text-muted text-lg mt-3" variants={itemVariants}>
			  Chez <strong>LE BANQUET</strong>,
			  nous préparons des plats délicieux et sains avec des ingrédients frais et locaux.
		  </motion.p>
		  <motion.div className="div" variants={itemVariants}>
			  <CallToActionBtn
			    isBtn={false} link="#reservation"
			    text="Réserver une table"
			    className="bg-accent hover:bg-accentHover
				text-white rounded-3xl btn-md reservation-btn mt-6"

			  />
		  </motion.div>
	  </motion.div>
	)
}

export default HeroTexts