import Input from "./input.jsx";
import Textarea from "./textarea.jsx";
import CallToActionBtn from "../callToActionBtn.jsx";


/**
 * dislay contact form
 * @returns {JSX.Element}
 * @constructor
 */
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

export default ContactForm