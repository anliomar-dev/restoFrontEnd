import { CircleCheck } from "lucide-react";
import aboutImage1 from '../assets/images/aboutImage1.jpg'
import imgCarouselAbout5 from '../assets/images/imgCarouselAbout5.jpg'
import imgCarouselAbout1 from '../assets/images/imgCarouselAbout1.jpg'
import imgCarouselAbout3 from '../assets/images/imgCarouselAbout3.jpg'
import imgCarouselAbout4 from '../assets/images/imgCarouselAbout4.webp'
import {motion} from 'framer-motion'

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
	hidden: { opacity: 0, y: 100 },
}


/**
 * return all text inside the about section ( span an <p>)
 * @returns {JSX.Element}
 * @constructor
 */
function AboutSectionText(){
	return (
	  <>
		  <motion.p className="font-defaultFont text-muted text-lg"
            initial="hidden"
            whileInView="visible"
            variants={variantsSoloElement}
            viewport={{ once: true, amount: 0.5 }}
		  >
			  Nous vous invitons à découvrir notre carte créative,
			  un véritable voyage culinaire entre tradition et modernité.
		  </motion.p>
		  {/*Display list of key features with icons*/}
		  <motion.div className="about_spans flex flex-col py-5 font-defaultFont text-black text-base"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: "all" }}
		  >
			  <motion.span className="mb-3 flex text-base" variants={item}>
				  <CircleCheck size={35} color="red"  />
			   <p className="ps-2.5 mt-1">Ingrédients de qualité supérieure : Nos chefs s’engagent à respecter la saisonnalité et le terroir.</p>
			  </motion.span>
			  <motion.span className="mb-3 flex text-base" variants={item}>
				  <CircleCheck size={35} color="red" />
			   <p className="ps-2.5 mt-1">Ingrédients de qualité supérieure : Nos chefs s’engagent à respecter la saisonnalité et le terroir.</p>
			  </motion.span>
			  <motion.span className="mb-3 flex text-base" variants={item}>
				  <CircleCheck size={35} color="red" />
				  <p className="ps-2.5 mt-1">Ingrédients de qualité supérieure : Nos chefs s’engagent à respecter la saisonnalité et le terroir.</p>
			  </motion.span>
		  </motion.div>
		  <motion.p className="mb-5 font-defaultFont text-black text-lg"
            initial="hidden"
            whileInView="visible"
            variants={variantsSoloElement}
            viewport={{ once: true, amount: 0.5 }}
		  >
			  Découvrez une expérience culinaire unique où chaque plat raconte une histoire.
		  </motion.p>
	  </>
	)
}

/**
 * return a carousel that will be displayed in about section
 * Carousel displaying about-section images with animations
 * @returns {JSX.Element}
 */
function AboutCarousel(){
	return (
	  <motion.div className="carousel carousel-center
	    bg-secondaryBackground rounded-box max-w-md
	    space-x-4 p-4 h-[314px] w-full"
          initial="hidden"
          whileInView="visible"
          variants={variantsSoloElement}
          viewport={{ once: true, amount: 0.5 }}
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
	  </motion.div>
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
	  <section className="flex flex-col py-16 px-8 md:px-28" id="about-section">
		  <motion.div className="about-section_header flex flex-col justify-around items-center mb-14"
	          initial="hidden"
	          whileInView="visible"
	          variants={containerVariants}
	          viewport={{ once: true, amount: "all" }}

		  >
			  <motion.h2 className="text-lg text-textDefault mb-5" variants={item}>À propos</motion.h2>
			  <motion.h3 className="font-headingFont text-headingTitle text-5xl" variants={item}>
				  QUI SOMME NOUS ?
			  </motion.h3>
		  </motion.div>
		  <div className=" h-auto flex justify-center items-center lg:items-start flex-col gap-x-16 gap-y-8 lg:flex-row about-section_body ">
			  <motion.div className="w-auto"
	              initial="hidden"
	              whileInView="visible"
	              variants={containerVariants}
	              viewport={{ once: true, amount: 0.2 }}
			  >
				  <motion.img src={aboutImage1} alt="" variants={item} />
				  <motion.div className="border-4 border-muted mt-6 py-6 flex flex-col justify-center items-center"
		              initial="hidden"
		              whileInView="visible"
		              variants={containerVariants}
		              viewport={{ once: true, amount: 0.5 }}
				  >
					  <motion.h3 className="text-headingTitle text-2xl font-bold" variants={item}>
						  Réserver une table
					  </motion.h3>
					  <motion.p className="text-3xl font-bold text-accentHover" variants={item}>
						  +230 5429 7857
					  </motion.p>
				  </motion.div>
			  </motion.div>
			  <motion.div className="w-full lg:w-[500px] ">
				  <AboutSectionText />
				  <AboutCarousel />
			  </motion.div>
		  </div>
	  </section>
	)
}

export default AboutSection