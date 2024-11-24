import { useParams } from 'react-router-dom';

function CategoryDishes (){
	const {categoryName} = useParams();
	return <h1>{categoryName}</h1>
}

export default CategoryDishes;