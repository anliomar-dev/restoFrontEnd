import {Clock, Mail, MapPin, Phone} from "lucide-react";
import ContactForm from "./forms/ContactForm.jsx";


/**
 * display map fo
 * @returns {JSX.Element}
 * @constructor
 */
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

/**
 * A card that displays contact information such as an address, phone number, or email.
 * This component allows you to pass any icon (e.g., MapPin) as a child element alongside the text.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.h3 - The title or heading for the card, such as "Adresse", "Phone", or "Email".
 * @param {string} props.text - The text content to be displayed in the card (e.g., the actual address, phone number, or email).
 * @param {JSX.Element} props.children - Any icon or additional JSX elements to display within the card (e.g., an icon like MapPin).
 *
 * @returns {JSX.Element} The ContactInfosCard component.
 *
 * @example
 * <ContactInfosCard h3="Adresse" text="Plot E63 Rue épices">
 *   <MapPin size={55} className="bg-accentHover p-4 rounded-full text-white" />
 * </ContactInfosCard>
 */
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

/**
 * Displays a container of contact cards, each showing a different piece of contact information
 * (e.g., address, phone number, email, opening hours).
 * Each card includes an icon and its respective text content.
 *
 * @returns {JSX.Element} A grid layout containing contact information cards.
 *
 * @example
 * <ContactInfos />
 */
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


/**
 * Displays the contact section containing a map for location, contact information cards, and a contact form.
 * This section allows users to get in touch with the company for more information.
 *
 * @returns {JSX.Element} The entire contact section layout.
 *
 * @example
 * <ContactSection />
 */
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

export default ContactSection