function MenuButton({ children, btnName, setCategory, setActiveBtn, activeBtn }) {
	return (
	  <button
		className={`text-lg menu-button ${activeBtn === btnName ? 'text-accent hover:text-accentHover border-b-2 border-b-accentHover' : ''}`}
		onClick={() => {
			setActiveBtn(btnName);  // Met à jour l'état du bouton actif
			setCategory(btnName);   // Met à jour la catégorie dans le parent
		}}
	  >
		  {children}
	  </button>
	);
}

export default MenuButton;
