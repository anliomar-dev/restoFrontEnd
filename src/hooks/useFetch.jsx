import { useEffect, useState } from "react";

function useFetchDishesByCategory(initialCategory, defaulPpage=1) {
	const [category, setCategory] = useState(initialCategory);
	const [page, setPage] = useState(defaulPpage);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [dishes, setDishes] = useState([]);

	useEffect(() => {
		const fetchDishes = async () => {
			try {
				const res = await fetch(`http://localhost:8000/dishes/?category=${category}&page=${page}`);
				if (!res.ok) {
					throw new Error(`Error fetching dishes for category ${category}`);
				}
				const dishes = await res.json();
				console.log(dishes);
				setDishes(dishes);
			} catch (e) {
				setError(e.toString());
			} finally {
				setLoading(false);
			}
		};
		fetchDishes();
	}, [category, page]);

	return { loading, error, dishes, setCategory, category, page, setPage };
}

export default useFetchDishesByCategory;