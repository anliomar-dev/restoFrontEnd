import {useState} from "react";

function Textarea(props) {
	const [value, setValue] = useState('');
	return (
	  <textarea
		placeholder={props.placeholder}
		value={value}
		onChange={(e)=>setValue(e.target.value)}
		className={`textarea textarea-bordered ${props.className}`}
	  >
	  </textarea>
	)
}

export default Textarea