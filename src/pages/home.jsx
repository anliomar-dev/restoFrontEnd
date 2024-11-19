// comoponents
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/Experience";
import BooktableSection from "../components/BooktableSection";
import ContactSection from "../components/ContactSection.jsx";
import GalerySection from "../components/galerySection.jsx";
import MenuSection from "../components/MenuSection.jsx";


function Home() {
	return (
	  <>
		  <HeroSection/>
		  <AboutSection/>
		  <ExperienceSection/>
		  <MenuSection />
		  <BooktableSection/>
		  <GalerySection/>
		  <ContactSection/>
	  </>
	)
}

/* todo: Menu, Gallery, Footer*/
export default Home;