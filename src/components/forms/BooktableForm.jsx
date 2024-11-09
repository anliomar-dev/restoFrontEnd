import Input from "./input.jsx";
import Textarea from "./textarea.jsx";
import CallToActionBtn from "../callToActionBtn.jsx";

/**
 * Display the form to book a table.
 * This form includes inputs for name, surname, email, reservation date, time, number of people, and a message.
 *
 * @component
 * @returns {JSX.Element} The form for booking a table, including multiple input fields and a submit button.
 */
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

export default BookTableForm;