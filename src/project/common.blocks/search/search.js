// import { searchInput } from "./__input/search__input";
// import { searchButton } from "./__input/search__button";
// import { searchIcon } from "./__input/search__icon";

// searchInput(data);
// searchIcon(data);
// searchButton(data);


const search = () => {
    console.log('search working...');

    const $search = document.querySelector('[data-type="search"]');
    const $searchInput = $search.querySelector('[data-type="search__input"');
    const $searchButton = $search.querySelector('[data-type="search__button"');
    const $searchIcon = $searchButton.querySelector('[data-type="search__icon"');

    const cls = {
        searchInputOpen: 'search__input_open'
    }
    
    const toSwitch = (el, cls) => {
        el.classList.toggle(cls)
    }

    $searchButton.addEventListener('click', () => {
        toSwitch($searchInput, cls.searchInputOpen);
    });

    

};

export { search };
