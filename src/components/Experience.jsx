import experiencesData from "../experiencesData.jsx";
import CallToActionBtn from "./common/callToActionBtn.jsx";

/**
 * learn more button is used on experience section it return a component
 * <CalltoactionButton> and his children (a text and a svg icon)
 *
 * @returns {JSX.Element}
 */
function LearnMoreButton(){
	return(
	  <CallToActionBtn
		isBtn={true}
		className="bg-transparent hover:bg-white
			    text-white hover:text-red-500 border-transparent
			    backdrop-brightness-150
			    rounded-3xl btn-md reservation-btn
			    mt-6 transition-colors duration-300
			    "
	  >
		  <span className=""> En savoir plus</span>
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="lucide lucide-chevron-right"
		  >
			  <path d="m9 18 6-6-6-6"/>
		  </svg>
	  </CallToActionBtn>
	)
}


/**
 * ExperienceCard component that displays an icon, a title, and a descriptive text inside a styled card.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.icon - The icon to be displayed in the card.
 * @param {string} props.title - The title to be displayed in the card.
 * @param {string} props.text - The descriptive text to be displayed in the card.
 * @returns {JSX.Element} A styled card component that contains an icon, title, and description.
 *
 * @example
 * <ExperienceCard
 *    icon={<MyIcon />}
 *    title="My Title"
 *    text="This is a description of the experience."
 * />
 */
function ExperienceCard(props){
	return (
	  <div className="flex flex-col gap-6 justify-center items-center w-full bg-white py-10 px-10">
		  <div className="p-4 rounded-full bg-red-50">
			  {props.icon}
		  </div>
		  <h4 className="text-xl font-bold text-center">{props.title}</h4>
		  <p className="font-defaultFont">
			  {props.text}
		  </p>
	  </div>
	)
}

/**
 * ExperienceSection component that displays a section explaining "Why Choose Us" and a series of experience cards.
 *
 * @component
 * @returns {JSX.Element} A section containing a title, description, a button, and a set of experience cards.
 *
 * @example
 * <ExperienceSection />
 */
function ExperienceSection() {
	return (
	  <section className="bg-secondaryBackground flex flex-col md:flex-row justify-center gap-x-6 gap-y-6 py-16 px-8 md:px-28" id="experience-section">
		  <div className="bg-accentHover w-auto md-w-2/5 max-h-[370px] py-8 px-6 flex flex-col justify-center">
			  <h3 className="text-white text-3xl font-bold font-defaultFont mb-7">Pourquoi Nous Choisir</h3>
			  <p className="text-white text-base">
				  Chez le banquet, chaque repas est une découverte culinaire,
				  créée avec soin par nos chefs. Profitez d&#39;une ambiance conviviale et
				  de saveurs authentiques dans chaque plat.
			  </p>
			  <div className="flex justify-center">
				  <LearnMoreButton />
			  </div>
		  </div>
		  <div className="flex flex-col w1200:flex-row justify-center gap-6">
			  {experiencesData.map((experience, index) => (
				<ExperienceCard key={index} {...experience} />
			  ))}
		  </div>
	  </section>
	);
}


export default ExperienceSection