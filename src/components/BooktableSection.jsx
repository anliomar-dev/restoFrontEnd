import reservation from "../assets/images/reservation.jpg";
import BookTableForm from "./forms/BooktableForm.jsx";
import {useInView, motion } from "framer-motion"
import {useRef} from "react";

function BooktableSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true});
	return (
	  <section ref={ref} className="px-8 md:px-28 flex flex-col justify-center items-center py-16 mt-5" id="reservation">
		  <div style={{
			  transform: isInView ? "none" : "translateY(70px)",
			  opacity: isInView ? 1 : 0,
			  transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
		  }}>
			  <h2 className="mb-16 font-headingFont font-bold text-headingTitle text-6xl">Réserver une table</h2>
		  </div>
		  <motion.div
		    className="
		    h-auto w-full flex flex-col gap-y-8 lg:flex-row
		    justify-center items-center bg-secondaryBackground"
		    ref={ref}
		    initial={{ opacity: 0, y: 50 }}
		    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
		    transition={{ duration: 1, }}
		  >
			  <div className="w-full lg:w-[415px] flex justify-center">
				  <img src={reservation} alt="reservation image" className="h-96 w-full" />
			  </div>
			  <div className="flex flex-col items-center w-full px-8 lg:px-16 mb-6">
				  <BookTableForm />
			  </div>
		  </motion.div>
	  </section>
	)
}

export default BooktableSection