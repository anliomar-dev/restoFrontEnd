import CallToActionBtn from "./common/callToActionBtn.jsx";
import heroImg from "../assets/images/heroImg.png";
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
			  <h1 className="hero-title font-headingFont font-bold text-headingTitle leading-tight">
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
		  <div className="hero-img max-w-lg max-h-lg mx-10">
			  <img src={heroImg} alt="hero image" className="w-auto h-auto" />
		  </div>
	  </section>
	)
}

export default HeroSection;