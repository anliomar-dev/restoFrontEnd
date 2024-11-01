import {useState} from "react";

function Input(props) {
	const [value, setValue] = useState('');
	return (
	  <input
	    type={props.type}
	    placeholder={props.placeholder}
	    value={value}
	    onChange={(e)=>setValue(e.target.value)}
	    min={props.type === "number" ? 0 : undefined}
	    className={`input input-bordered ${props.className}`}
	  />
	)
}

export default Input;