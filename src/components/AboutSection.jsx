import { CircleCheck } from "lucide-react";
import aboutImage1 from '../assets/images/aboutImage1.jpg'
import imgCarouselAbout5 from '../assets/images/imgCarouselAbout5.jpg'
import imgCarouselAbout1 from '../assets/images/imgCarouselAbout1.jpg'
import imgCarouselAbout3 from '../assets/images/imgCarouselAbout3.jpg'
import imgCarouselAbout4 from '../assets/images/imgCarouselAbout4.webp'


/**
 * return all test inside the about section ( span an <p>)
 * @returns {JSX.Element}
 * @constructor
 */
function AboutSectionText(){
	return (
	  <>
		  <p className="font-defaultFont text-muted text-lg">Nous vous invitons à découvrir notre carte créative,
			  un véritable voyage culinaire entre tradition et modernité.
		  </p>
		  <div className="about_spans flex flex-col py-5 font-defaultFont text-black text-base">
			  <span className="mb-3 flex text-base">
				  <CircleCheck size={35} color="red"  />
			   <p className="ps-2.5 mt-1">Ingrédients de qualité supérieure : Nos chefs s’engagent à respecter la saisonnalité et le terroir.</p>
			  </span>
			  <span className="mb-3 flex text-base">
				  <CircleCheck size={35} color="red" />
			   <p className="ps-2.5 mt-1">Ingrédients de qualité supérieure : Nos chefs s’engagent à respecter la saisonnalité et le terroir.</p>
			  </span>
			  <span className="mb-3 flex text-base">
				  <CircleCheck size={35} color="red" />
				  <p className="ps-2.5 mt-1">Ingrédients de qualité supérieure : Nos chefs s’engagent à respecter la saisonnalité et le terroir.</p>
			  </span>
		  </div>
		  <p className="mb-5 font-defaultFont text-black text-lg">
			  Découvrez une expérience culinaire unique où chaque plat raconte une histoire.
		  </p>
	  </>
	)
}

/**
 * return a carousel that will be displayed in about section
 *
 * @returns {JSX.Element}
 */
function AboutCarousel(){
	return (
	  <div className="carousel carousel-center
	    bg-secondaryBackground rounded-box max-w-md
	    space-x-4 p-4 h-[314px]"
	  >
		  <div className="carousel-item">
			  <img
				src={imgCarouselAbout5}
				alt="image-1"
				className="rounded-box w-full"/>
		  </div>
		  <div className="carousel-item">
			  <img
				src={imgCarouselAbout3}
				alt="image-2"
				className="rounded-box w-full"/>
		  </div>
		  <div className="carousel-item">
			  <img
				src={imgCarouselAbout4}
				alt="image-3"
				className="rounded-box w-full"/>
		  </div>
		  <div className="carousel-item">
			  <img
				src={imgCarouselAbout1}
				alt="image-4"
				className="rounded-box w-full"/>
		  </div>
	  </div>
	)
}

/**
 * AboutSection component that displays the "About Us" section of the webpage.
 *
 * @component
 * @returns {JSX.Element} A section containing an image, contact information, and additional content related to the business.
 *
 * @example
 * <AboutSection />
 */
function AboutSection() {
	return (
	  <section className="flex flex-col py-16" id="about-section">
		  <div className="about-section_header flex flex-col justify-around items-center mb-14">
			  <h2 className="text-lg text-textDefault mb-5">À propos</h2>
			  <h3 className="font-headingFont text-headingTitle text-5xl">QUI SOMME NOUS ?</h3>
		  </div>
		  <div className="about-section_body flex justify-center">
			  <div className="w-[800px]">
				  <img src={aboutImage1} alt=""/>
				  <div className="border-4 border-muted mt-6 py-6 flex flex-col justify-center items-center">
					  <h3 className="text-headingTitle text-2xl font-bold">Réserver une table</h3>
					  <p className="text-3xl font-bold text-accentHover">+230 5429 7857</p>
				  </div>
			  </div>
			  <div className="w-[500px] ps-16">
				  <AboutSectionText />
				  <AboutCarousel />
			  </div>
		  </div>
	  </section>
	)
}

export default AboutSection