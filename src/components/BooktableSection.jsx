import reservation from "../assets/images/reservation.jpg";
import BookTableForm from "./forms/BooktableForm.jsx";

function BooktableSection() {
	return (
	  <section className="flex flex-col justify-center items-center py-16" id="reservation">
		  <div>
			  <h2 className="mb-16 font-headingFont font-bold text-headingTitle text-6xl">Réserver une table</h2>
		  </div>
		  <div className="mx-28 h-auto flex flex-col gap-y-8 lg:flex-row justify-center items-center bg-secondaryBackground">
			  <div className="w-full lg:w-[415px] flex justify-center">
				  <img src={reservation} alt="reservation image" className="h-96 w-full" />
			  </div>
			  <div className="flex flex-col items-center max-w-[870px] px-16 mb-6">
				  <BookTableForm />
			  </div>
		  </div>
	  </section>
	)
}

export default BooktableSection