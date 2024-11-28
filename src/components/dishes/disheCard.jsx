function DisheCardHome(props) {
	return (
	  <div className="card lg:card-side bg-base-100 shadow-xl border-2">
		  <figure className="w-full" >
			  <img
			    className="h-[250px] w-full object-cover"
				src={props.src}
				alt={props.disheName}/>
		  </figure>
		  <div className="card-body">
			  <h2 className="card-title">{props.disheName}</h2>
			  <div className="ingredients py-3">
				  <h2 className="mb-2 text-lg font-bold text-accentHover">ingredients</h2>
				  <p>{props.ingredients}</p>
			  </div>

		  </div>
	  </div>
	)
}

export default DisheCardHome;