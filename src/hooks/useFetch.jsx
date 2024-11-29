import {useEffect, useRef, useState} from "react";

function useFetchDishesByCategory(initialCategory, defaulPpage=1) {
	const [category, setCategory] = useState(initialCategory);
	const [page, setPage] = useState(defaulPpage);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [dishes, setDishes] = useState([]);
	const numberOfPagesRef = useRef(0);

	useEffect(() => {
		const fetchDishes = async () => {
			try {
				const res = await fetch(
					`https://omaranli.alwaysdata.net/dishes/?category=${category}&page=${page}`);
				if (!res.ok) {
					throw new Error(`Error fetching dishes for category ${category}`);
				}
				const dishes = await res.json();
				setDishes(dishes);
				if (page === 1) {
					numberOfPagesRef.current = Math.ceil(dishes.count / dishes.results.length);
				}
			} catch (e) {
				setError(e.toString());
			} finally {
				setLoading(false);
			}
		};
		fetchDishes();
	}, [category, page]);

	return { loading, error, dishes, setCategory, category, page, setPage, numberOfPagesRef };
}

export default useFetchDishesByCategory;