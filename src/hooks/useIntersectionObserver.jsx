import { useState, useEffect, useRef } from "react";

export default function useIntersectionObserver() {
	const [inObserver, setInObserver] = useState(false); // set initial state to false
	const ref = useRef(null);

	useEffect(() => {
		const currentElement = ref.current; // store the current ref in a variable
		const observer = new IntersectionObserver(
		  ([entry]) => setInObserver(entry.isIntersecting),
		  { threshold: 0.5 }
		);

		if (currentElement) {
			observer.observe(currentElement); // use the stored reference
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement); // use the stored reference in cleanup
			}
		};
	}, []);

	return [inObserver, ref]; // return the state and the ref
}
