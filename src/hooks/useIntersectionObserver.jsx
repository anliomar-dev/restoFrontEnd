import { useState, useEffect, useRef } from "react";

export default function useIntersectionObserver() {
	const [inObserver, setInObserver] = useState(false); // animation pas encore jouée
	const [hasBeenInView, setHasBeenInView] = useState(false); // garder une trace si l'élément est déjà apparu
	const ref = useRef(null);

	useEffect(() => {
		const currentElement = ref.current;

		const observer = new IntersectionObserver(
		  ([entry]) => {
			  // On déclenche seulement si l'élément est visible et que l'animation n'a pas encore été jouée
			  if (entry.isIntersecting && !hasBeenInView) {
				  setInObserver(true);
				  setHasBeenInView(true); // Marque que l'animation a été jouée
			  }
		  },
		  { threshold: 0.5 }
		);

		if (currentElement) {
			observer.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, [hasBeenInView]); // Ajoutez `hasBeenInView` à la liste des dépendances

	return [inObserver, ref];
}
