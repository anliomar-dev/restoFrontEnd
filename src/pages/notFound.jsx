import BG404 from '../../public/BG404.png';
import {NavLink} from "react-router-dom";
import {House} from "lucide-react";
import {motion} from "framer-motion";

function NotFound() {
	return <div className="not-found flex justify-center items-center w-full h-screen">
		{/*<h1 className="text-6xl font-bold font-headingFont"> 404 Not Found </h1>*/}
		<div className="flex justify-center items-center w-full h-full relative">
			<NavLink to="/"
			    className="absolute bottom-1/4 mb-8 "
			>
				<motion.div
				  className="flex items-center gap-2 border-2 py-1
				  px-4 rounded-md text-2xl text-black bg-white"
				  whileHover={{
					  scale: 1.1,
					  color: "white",
					  backgroundColor: "red",
					  transition: { duration: 0.3 }
				  }}
				>
					<House />
					<span>Home</span>
				</motion.div>
			</NavLink>

			<img src={BG404} alt=""/>
		</div>
	</div>;
}

export default NotFound;