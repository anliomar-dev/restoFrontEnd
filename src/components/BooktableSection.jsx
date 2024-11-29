import reservation from "../assets/images/reservation.jpg";
import BookTableForm from "./forms/BooktableForm.jsx";
import { motion } from "framer-motion";
import { containerVariants, variantsSoloElement, item } from "../utils.js";

function BooktableSection() {
  return (
    <section
      className="px-8 md:px-28 flex flex-col justify-center items-center py-16 mt-5"
      id="reservation"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variantsSoloElement}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="mb-16 font-headingFont font-bold text-headingTitle text-5xl md:text-6xl">
          Réserver une table
        </h2>
      </motion.div>
      <motion.div
        className="
				h-auto w-full flex flex-col gap-y-8 lg:flex-row
				justify-center items-center bg-secondaryBackground"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          className="w-full lg:w-[415px] flex justify-center"
          variants={item}
        >
          <img
            src={reservation}
            alt="reservation image"
            className="h-96 w-full"
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center w-full px-8 lg:px-16 mb-6"
          variants={item}
        >
          <BookTableForm />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default BooktableSection;
