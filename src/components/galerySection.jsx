import GallerySlider from "./gallerySlider.jsx";
import { motion } from "framer-motion";
import { containerVariants, item } from "../utils.js";

function GallerySection() {
  return (
    <motion.section
      className="bg-secondaryBackground px-8 md:px-28
				py-16 gallery-section flex flex-col
				items-center justify-center"
      id="gallery"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={item}>Gallerie</motion.h2>
      <motion.p
        className="mt-3 font-bold text-5xl font-headingFont"
        variants={item}
      >
        <span>Notre</span>
        <span className="text-accentHover">Gallerie</span>
      </motion.p>
      <GallerySlider />
    </motion.section>
  );
}

export default GallerySection;
