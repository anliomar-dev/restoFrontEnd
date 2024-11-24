import { Link } from 'react-router-dom';

function DropdownCategoriesDishes ({onclick}){
	return (
	  <>
		  <div tabIndex={0} role="button" className="m-1">
			  Plats
		  </div>
		  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
			  <li className="link-dropdown">
				  <Link to="/dishes/starter" onClick={onclick}>Starters</Link>
			  </li>
			  <li className="link-dropdown">
				  <Link to="/dishes/breakfast" onClick={onclick}>breakfast</Link>
			  </li>
			  <li className="link-dropdown">
				  <Link to="/dishes/lunch" onClick={onclick}>Lunch</Link>
			  </li>
			  <li className="link-dropdown">
				  <Link to="/dishes/dinner" onClick={onclick}>Dinner</Link>
			  </li>
			  <li className="link-dropdown">
				  <Link to="/dishes/dessert" onClick={onclick}>Dessert</Link>
			  </li>
		  </ul>
	  </>
	)
}

export default DropdownCategoriesDishes;