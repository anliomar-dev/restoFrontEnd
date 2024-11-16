import GallerySlider from "./gallerySlider.jsx";

function GallerySection() {
	return (
	  <section
	    className="bg-secondaryBackground px-8 md:px-28
	        py-16 gallery-section flex flex-col
	        items-center justify-center"
	        id="gallery"
	    >
		  <h2>Gallerie</h2>
		  <p className="mt-3 font-bold text-5xl font-headingFont"><span>Notre</span><span className="text-accentHover">Gallerie</span></p>
		  <GallerySlider />
	  </section>
	)
}

export default GallerySection;