import {motion} from "framer-motion";

/**
 * return button if isBtn prop is true, else <a></a>
 * both have the same style
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function CallToActionBtn(props) {
	return (
	  props.isBtn ? (
		<motion.button
		  type={props.type}
		  className={`btn ${props.className}`}
		  whileHover={{scale: 1.1}}
		>
			{props.children}
		</motion.button>
	  ) : (
		<motion.a
		  href={props.link}
		  onClick={props.onClick} className={`btn ${props.className}`}>
			{props.text}
		</motion.a>
	  )
	);
}
export default CallToActionBtn