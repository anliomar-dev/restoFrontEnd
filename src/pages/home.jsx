import heroImg from '../assets/images/heroImg.png'

function HeroSection(){
	return (
	  <div className="hero bg-secondaryBackground flex justify-around">
		<div className="hero-body">
			<h1>ENJOY A HEALTHY AND <br/> DELICIOUS FOOD</h1>
			<p></p>
			<button>

			</button>
		</div>
		  <div className="hero-img">
			  <img src={heroImg} alt="hero image"/>
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