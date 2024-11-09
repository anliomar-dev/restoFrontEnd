import heroImg from '../assets/images/heroImg.png'
import aboutImage1 from '../assets/images/aboutImage1.jpg'
import imgCarouselAbout5 from '../assets/images/imgCarouselAbout5.jpg'
import imgCarouselAbout1 from '../assets/images/imgCarouselAbout1.jpg'
import imgCarouselAbout3 from '../assets/images/imgCarouselAbout3.jpg'
import imgCarouselAbout4 from '../assets/images/imgCarouselAbout4.webp'
import CallToActionBtn from "../components/callToActionBtn.jsx";
import { CircleCheck, MapPin, Mail, Phone, Clock } from "lucide-react";

import experiencesData from "../experiencesData.jsx";
import Input from "../components/forms/input.jsx";
import Textarea from "../components/forms/textarea.jsx";
import reservation from "../assets/images/reservation.jpg"

function HeroSection(){
	return (
	  <section className="hero bg-secondaryBackground flex justify-around items-center py-16" id="Home">
		<div className="hero-body max-w-lg">
			<h1 className="hero-title font-headingFont font-bold text-headingTitle leading-tight">Profitez d&#39;une nourriture délicieuse et saine</h1>
			<p className="font-defaultFont text-muted text-lg mt-3">
				Chez <strong>LE BANQUET</strong>, nous préparons des plats délicieux et sains avec des ingrédients frais et locaux.

			</p>
			<CallToActionBtn
			  isBtn={false} link="#reservation"
			  text="Réserver une table"
			  className="bg-accent hover:bg-accentHover text-white rounded-3xl btn-md reservation-btn mt-6"
			/>
		</div>
		  <div className="hero-img max-w-lg max-h-lg">
			  <img src={heroImg} alt="hero image" className="w-auto h-auto" />
		  </div>
	  </section>
	)
}

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
 * @constructor
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


/**
 * learn more button is used un experience section it return a component
 * <CalltoactionButton> and his children (a text and a svg icon)
 *
 * @returns {JSX.Element}
 * @constructor
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

function ExperienceCard(props){
	return (
	  <div className="flex flex-col gap-6 justify-center items-center w-[268px] bg-white py-10 px-10">
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

function ExperienceSection() {

	return (
	  <section className="bg-secondaryBackground flex justify-center gap-x-6 py-16 px-6" id="experience-section">
		  <div className="bg-accentHover w-[420px] py-8 px-6 flex flex-col justify-center">
			  <h3 className="text-white text-3xl font-bold font-defaultFont mb-7">Pouquoi Nous Choisir</h3>
			  <p className="text-white text-base">
				  Chez le banquet, chaque repas est une découverte culinaire,
				  créée avec soin par nos chefs. Profitez d&#39;une ambiance conviviale et
				  de saveurs authentiques dans chaque plat.
			  </p>
			  <div className="flex justify-center">
				  <LearnMoreButton/>
			  </div>
		  </div>
		  <div className="flex flex-wrap justify-center gap-6">
			  {experiencesData.map((experience, index) => (
				<ExperienceCard key={index} {...experience} />
			  ))}
		  </div>
	  </section>
	)
}


function BookTableForm() {
	return <form action="" className="w-full">
		<div className="fields flex flex-col gap-4 justify-center">
			<div className="inputs w-full grid grid-cols-3 gap-3">
				<Input type="text" placeholder="Nom" className="col-span-1"/>
				<Input type="text" placeholder="Prenom" className="col-span-1"/>
				<Input type="email" placeholder="Email" className="col-span-1"/>
				<Input type="date" placeholder="" className="col-span-1"/>
				<Input type="time" placeholder="" className="col-span-1"/>
				<Input type="number" placeholder="Nombre de personnes" className="col-span-1"/>
			</div>
			<Textarea className="w-full" placeholder="Message"/>
		</div>
		<div className="w-full flex justify-center">
			<CallToActionBtn
			  isBtn={true}
			  type="submit"
			  className="mt-3 bg-accent hover:bg-accentHover rounded-md btn-md text-white px-10"
			>
				Rerserver
			</CallToActionBtn>
		</div>
	</form>
}

function BooktableSection() {
	return (
	  <section className="flex flex-col justify-center items-center py-16 px-28" id="reservation">
		  <div>
			  <h2 className="mb-16 font-headingFont font-bold text-headingTitle text-6xl">Réserver une table</h2>
		  </div>
		  <div className="flex justify-center items-center bg-secondaryBackground">
			  <div className="w-[415px]">
				  <img src={reservation} alt="reservation image"/>
			  </div>
			  <div className="flex flex-col items-center w-[870px] px-10">
				<BookTableForm />
			  </div>
		  </div>
	  </section>
	)
}

function MapLocation() {
	return (
	  <div className="flex justify-center mb-10" id="mapLocation">
		  <iframe
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d71422.56182577724!2d57.46703620419086!3d-20.247373655275567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5b0018cc4555%3A0x87faa690ab43bd46!2sRue%20cinq%20Epices!5e0!3m2!1sfr!2smu!4v1730830922149!5m2!1sfr!2smu"
			className="lg:w-full h-[350px]"

			style={{border: 0}}  // Style inline transformé en objet JavaScript
			allowFullScreen
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		  ></iframe>
	  </div>
	);
}


function ContactInfosCard(props){
	return (
	  <>
		  <div className="shadow-md border-2 shadow-zinc-200 bg-white rounded-sm flex gap-6 items-center p-6">
			  {props.children}
			  <div className="flex flex-col">
				  <h3 className="font-bold font-defaultFont text-xl">{props.h3}</h3>
				  <p>{props.text}</p>
			  </div>
		  </div>
	  </>
	)
}

function ContactInfos() {
	return (
	  <div className="contact-infos mb-6 grid gap-6 grid-cols-2">
		  <ContactInfosCard h3="Adresse" text="Plot E63 Rue épices">
			  <MapPin
			    size={55}
			    className="bg-accentHover p-4 rounded-full text-white"
			  />
		  </ContactInfosCard>
		  <ContactInfosCard h3="Appelez nous" text="+230 5429 7857">
			  <Phone
			    size={55}
			    className="bg-accentHover p-4 rounded-full text-white"
			  />
		  </ContactInfosCard>
		  <ContactInfosCard h3="Email" text="lebanquet@gamil.com">
			  <Mail
			    size={55}
			    className="bg-accentHover p-4 rounded-full text-white"
			  />
		  </ContactInfosCard>
		  <ContactInfosCard h3="Heures d'ouvertures" text="Plot E63 Rue épices">
			  <Clock
			    size={55}
			    className="bg-accentHover p-4 rounded-full text-white"
			  />
		  </ContactInfosCard>
	  </div>
	)
}

function ContactForm() {
	return (
	  <form action="" className="w-full shadow-lg border-2 shadow-zinc-200 bg-white p-10">
		<div className="fields flex flex-col gap-6 justify-center">
			<div className="inputs w-full grid grid-cols-2 gap-6">
				<Input type="text" placeholder="Nom" className="col-span-1"/>
				<Input type="text" placeholder="Prenom" className="col-span-1"/>
				<Input type="email" placeholder="Email" className="col-span-1"/>
				<Input type="text" placeholder="objet" className="col-span-1"/>
			</div>
			<Textarea className="w-full" placeholder="Message"/>
		</div>
		<div className="w-full flex justify-center">
			<CallToActionBtn
			  isBtn={true}
			  type="submit"
			  className="mt-5 bg-accent hover:bg-accentHover rounded-full btn-md text-white px-10"
			>
				Envoyer
			</CallToActionBtn>
		</div>
	  </form>
	)
}

function ContactSection() {
	return (
	  <section className="px-28" id="contact">
		  <h1 className="flex justify-center py-14">Contactez nous pour plus d&#39;informations</h1>
		  <MapLocation/>
		  <ContactInfos/>
		  <ContactForm />
	  </section>
	)
}


function Home() {
	return (
	  <>
		  <HeroSection/>
		  <AboutSection/>
		  <ExperienceSection/>
		  <BooktableSection/>
		  <ContactSection/>
	  </>
	)
}
/* todo: Menu, Gallery, Footer*/
export default Home;