import { useState, useEffect, useRef } from "react";
import "../assets/styles/slider.css"; // Import CSS styles for the slider
import aboutImage1 from "../assets/images/aboutImage1.jpg"; // Import image files
import imgCarouselAbout5 from "../assets/images/imgCarouselAbout5.jpg";
import reservation from "../assets/images/reservation.jpg";
import gallery1 from "../assets/images/gallery1.webp";
import gallery2 from "../assets/images/gallery2.webp";
import gallery3 from "../assets/images/gallery3.webp";
import gallery4 from "../assets/images/gallery4.webp";
import gallery5 from "../assets/images/gallery5.webp";
import {motion} from "framer-motion";
import {variantsSoloElement} from "../utils.js";

// Array of images for the slider
const images = [
	aboutImage1,
	gallery1,
	gallery2,
	gallery3,
	gallery4,
	gallery5,
	reservation,
	imgCarouselAbout5,
];

const GallerySlider = () => {
	// useState to track the current slide index
	const [currentIndex, setCurrentIndex] = useState(0);
	// useState to manage transition state
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [sliderWidth, setSliderWidth] = useState(0); // State to track slider width
	const sliderRef = useRef(null);

	// Extending the image array to double its length, enabling seamless infinite sliding effect
	const extendedImages = [
		...images, // Original images
		...images, // Duplicated images
	];

	// Function to go to the next slide
	const nextSlide = () => {
		setIsTransitioning(true); // Start the transition
		// Update the currentIndex to the next slide
		setCurrentIndex((prevIndex) => prevIndex + 1);
	};

	// Function to handle the end of the transition
	const handleTransitionEnd = () => {
		setIsTransitioning(false); // Stop transition
		// Reset currentIndex to 0 if it exceeds the total number of images to create infinite effect
		if (currentIndex >= images.length) {
			setCurrentIndex(0);
		}
	};

	// useEffect to create an automatic slide effect every 4 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide(); // Move to the next slide
		}, 4000); // 4 seconds delay

		// Clean up the interval when the component unmounts
		return () => clearInterval(interval);
	}, [currentIndex]); // Re-run effect whenever currentIndex changes

	const updateSliderWidth = () => {
		if(sliderRef.current) {
			setSliderWidth(sliderRef.current.clientWidth);
		}
	}

	const getTranslateX = () =>{
		if(sliderWidth >= 1200){
			return currentIndex * 20
		}else if(sliderWidth >= 768 && sliderWidth <= 1199){
			return currentIndex * 33.3;
		}else{
			return currentIndex * 100
		}
	}
	useEffect(() => {
		updateSliderWidth();
		window.addEventListener("resize", updateSliderWidth);
		// Clean up the event listener on unmount
		return () =>{
			window.removeEventListener("resize", updateSliderWidth);
		}
	}, [])

	return (
	  <motion.div className="slider" ref={sliderRef}
          initial="hidden"
          whileInView="visible"
          variants={variantsSoloElement}
          viewport={{ once: true, amount: 0.3 }}
	  >
		  <div
			className="slider-track"
			style={{
				// Calculate the horizontal translation of the slider based on currentIndex
				transform: `translateX(-${getTranslateX()}%)`,
				// Apply CSS transition only when transitioning
				transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
			}}
			// When the CSS transition ends, call handleTransitionEnd
			onTransitionEnd={handleTransitionEnd}
		  >
			  {extendedImages.map((image, index) => (
				<div
				  className={`sliderImage ${
					// Add 'imgActive' class to the image at the center of the visible slides
					index === (currentIndex + 2) % extendedImages.length ? 'imgActive' : ''
				  }`}
				  key={index} // Key for React rendering optimization
				>
					<img src={image} alt={`Slide ${index}`} /> {/* Display the image */}
				</div>
			  ))}
		  </div>

		  {/* Pagination dots */}
		  <PaginationBullet currentIndex={currentIndex} />
	  </motion.div>
	);
};


function PaginationBullet({ currentIndex }) {
	return (
	  <div className="pagination">
		  {images.map((_, index) => (
			<span
			  key={index} // Clé pour chaque point
			  className={`dot ${
				// Mettre en surbrillance le point actif
				currentIndex % images.length === index ? "active" : ""
			  }`}
			></span>
		  ))}
	  </div>
	);
}

export default GallerySlider;
