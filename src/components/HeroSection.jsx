import CallToActionBtn from "./common/callToActionBtn.jsx";
import heroImg from "../assets/images/heroImg.png";
import {motion} from "framer-motion";

// prop animate of the containers image of the hero section
const heroImageContainerAnimate = {
	scale: [1.1, 1.1, 1],
	rotate: [360, 360, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
}

// transition prop of the containers image of the hero section
const heroImageContainerTransition = {
	duration: 1.5,
	ease: "easeInOut",
	times: [0, 0.2, 0.5, 0.8, 1],
	repeatDelay: 1,
}

//transition for hero image
const heroImageTransition = {
	duration: 3,
	ease: "easeInOut",
	repeat: Infinity,

}

/**
 * HeroSection component that displays the hero section of the homepage with a title,
 * description, and a call-to-action button.
 * @component
 * @returns {JSX.Element} A hero section with a headline, a description, a call-to-action button, and an image.
 *
 * @example
 * <HeroSection />
 */
function HeroSection(){
	return (
	  <section
	    className="hero bg-secondaryBackground
	    flex lg:flex-row flex-col-reverse justify-around
	    items-center py-16
	    "
	    id="Home"
	  >
		  <div className="hero-body max-w-lg mx-10">
			  <h1 className="
			  hero-title font-headingFont font-bold
			  text-headingTitle leading-tight"
			  >
				  Profitez d&#39;une nourriture délicieuse et saine
			  </h1>
			  <p className="font-defaultFont text-muted text-lg mt-3">
				  Chez <strong>LE BANQUET</strong>,
				  nous préparons des plats délicieux et sains avec des ingrédients frais et locaux.
			  </p>
			  <CallToActionBtn
				isBtn={false} link="#reservation"
				text="Réserver une table"
				className="bg-accent hover:bg-accentHover
				text-white rounded-3xl btn-md reservation-btn mt-6"
			  />
		  </div>
		  <div className="hero-img-container max-w-lg max-h-lg mx-10">
			  <motion.div
			    className="box w-auto h-auto"
			    animate={heroImageContainerAnimate}
			    transition={heroImageContainerTransition}
			  >
				  <motion.img
				    src={heroImg}
				    alt="hero image"
				    className="w-full h-full"
				    animate={{ translateY: [-20, 0, -20] }}
				    transition={heroImageTransition}
				  />
			  </motion.div>
		  </div>
	  </section>
	)
}

export default HeroSection;