import { Link } from 'react-router-dom';

function DropdownCategoriesDishes (){
	return (
	  <>
		  <div tabIndex={0} role="button" className="m-1">
			  Plats
		  </div>
		  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
			  <li className="link-dropdown">
				  <Link to="/starter">Starters</Link>
			  </li>
			  <li className="link-dropdown">
				  <Link to="/breakfast">breakfast</Link>
			  </li>
			  <li className="link-dropdown">
				  <Link to="/lunch">Lunch</Link>
			  </li>
			  <li className="link-dropdown">
				  <Link to="/dinner">Dinner</Link>
			  </li>
			  <li className="link-dropdown">
				  <Link to="/dessert">Dessert</Link>
			  </li>
		  </ul>
	  </>
	)
}

export default DropdownCategoriesDishes;