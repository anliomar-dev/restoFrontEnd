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
		<button type={props.type} className={`btn bg-accent hover:bg-accentHover text-white ${props.className}`}>
			{props.children}
		</button>
	  ) : (
		<a href={props.link} onClick={props.onClick} className={`btn bg-accent hover:bg-accentHover text-white ${props.className}`}>
			{props.text}
		</a>
	  )
	);
}
export default CallToActionBtn