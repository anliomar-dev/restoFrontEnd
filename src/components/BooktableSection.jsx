import reservation from "../assets/images/reservation.jpg";
import BookTableForm from "./forms/BooktableForm.jsx";

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

export default BooktableSection