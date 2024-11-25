import { useParams } from 'react-router-dom';
import DisheCard from "../../components/dishes/disheCard.jsx";
import useFetchDishesByCategory from "../../hooks/useFetch.jsx";
import {useEffect} from "react";
function CategoryDishes (){
	const {categoryName} = useParams();
	const { loading, error, dishes,
	    setCategory,
		page, setPage, numberOfPagesRef
	} = useFetchDishesByCategory(categoryName);
	useEffect(() => {
		setCategory(categoryName);
		setPage(1);

	}, [categoryName, setPage, setCategory]);
	const nextPage = () => {
		if(page < numberOfPagesRef.current) {
			setPage( page + 1);
		}
	}
	const prevPage = () => {
		if(page > 1) {
			setPage(page-1);
		}
	}
	return (
	  <div className="dishes px-6 md:px-16 py-10">
		  <div className="text-6xl text-headingTitle font-bold font-headingFont flex justify-center">
			  {categoryName}
		  </div>
		  <div className="flex justify-end pb-3">
			  <div className="join">
				  <button className="join-item btn" onClick={prevPage}>«</button>
				  <button className="join-item btn">{page}/{numberOfPagesRef.current}</button>
				  <button className="join-item btn" onClick={nextPage}>»</button>
			  </div>
		  </div>
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			  {loading ? (
			    <div className="">
				    <p className="text-lg font-bold">Loading ...</p>
			    </div>
			  ) : error ? (
			    <p>{error}</p>
			  ) : (
				dishes.results.map((dish) => (
				  <DisheCard key={dish.id} disheName={dish.name} ingredients={dish.ingredients} src={dish.image}/>
				))
			  )}
		  </div>
	  </div>
	)
}

export default CategoryDishes;