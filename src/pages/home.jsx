// comoponents
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/Experience";
import BooktableSection from "../components/BooktableSection";
import ContactSection from "../components/ContactSection.jsx";
import GalerySection from "../components/galerySection.jsx";
import MenuSection from "../components/MenuSection.jsx";
import {useEffect, useState} from "react";


function Home() {
	const [dishes, setDishes] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:8000/dishes/?category=starter`)
		.then(res => res.json())
		.then(data => setDishes(data.results))
		  .catch(err => console.log(err));
	}, []);
	console.log(dishes);
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