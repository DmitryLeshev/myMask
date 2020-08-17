const search = () => {
	console.log("search working...");

	const $search = document.querySelector('[data-type="search"]');
	const $searchInput = $search.querySelector('[data-type="search__input"');
	const $searchButton = $search.querySelector('[data-type="search__button"');
	// const $searchIcon = $searchButton.querySelector('[data-type="search__icon"');

	const cls = {
		searchInputOpen: "search__input_open",
	};

	const toSwitch = (el, cls) => {
		el.classList.toggle(cls);
	};

	$searchButton.addEventListener("click", () => {
		toSwitch($searchInput, cls.searchInputOpen);
	});
};
search();
