import heroImg from '../assets/images/heroImg.png'
import CallToActionBtn from "../components/callToActionBtn.jsx";

function HeroSection(){
	return (
	  <div className="hero bg-secondaryBackground flex justify-around items-center py-16">
		<div className="hero-body max-w-lg">
			<h1 className="hero-title font-headingFont font-bold text-headingTitle leading-tight">Profitez d'une nourriture délicieuse et saine</h1>
			<p className="font-defaultFont text-muted text-lg mt-3">
				Chez <strong>LE BANQUET</strong>, nous préparons des plats délicieux et sains avec des ingrédients frais et locaux.

			</p>
			<CallToActionBtn
			  isBtn={false} link="#reservation"
			  text="Réserver une table"
			  className="rounded-3xl btn-md reservation-btn mt-6"
			/>
		</div>
		  <div className="hero-img max-w-lg max-h-lg">
			  <img src={heroImg} alt="hero image" className="w-auto h-auto" />
		  </div>
	  </div>
	)
}

function Home() {
	return (
	  <>
		  <HeroSection />
	  </>
	)
}

export default Home;