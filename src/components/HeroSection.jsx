import HeroTexts from "./heroTexts.jsx";
import heroImg from "../assets/images/heroImg.png";
import { motion } from "framer-motion";
// prop animate of the containers image of the hero section
const heroImageContainerAnimate = {
  scale: [1.08, 1.08, 1],
  rotate: [360, 360, 0],
  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
};

// transition prop of the containers image of the hero section
const heroImageContainerTransition = {
  duration: 1.5,
  ease: "easeInOut",
  times: [0, 0.2, 0.5, 0.8, 1],
  repeatDelay: 1,
};

//transition for hero image
const heroImageTransition = {
  duration: 3,
  ease: "easeInOut",
  repeat: Infinity,
};

/**
 * HeroSection component that displays the hero section of the homepage with a title,
 * description, and a call-to-action button.
 * @component
 * @returns {JSX.Element} A hero section with a headline, a description, a call-to-action button, and an image.
 *
 * @example
 * <HeroSection />
 */
function HeroSection() {
  return (
    <section
			className="hero bg-secondaryBackground
			flex lg:flex-row flex-col-reverse justify-around
			items-center py-16
			"
			id="Home"
    >
      <HeroTexts />
      <div className="hero-img-container max-w-lg max-h-lg mx-10">
        <motion.div
          className="box w-auto h-auto"
          animate={heroImageContainerAnimate}
          transition={heroImageContainerTransition}
        >
          <motion.img
            src={heroImg}
            alt="hero image"
            className="w-full h-full"
            animate={{ translateY: [-20, 0, -20] }}
            transition={heroImageTransition}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
