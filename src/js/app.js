import $ from 'jquery';
import '../scss/app.scss';
import './components/slick-slider/slick-slider';
import './components/site-navigation__toggle/site-navigation__toggle';
import './components/search/search';


function slider() {
    const btnBack = document.querySelector('.advantages__btn_back');
    const btnNext = document.querySelector('.advantages__btn_next');
    const ul = document.querySelector('.advantages__list');

    btnBack.addEventListener('click', function() {
        ul.scrollBy(-300, 0)
    });

    btnNext.addEventListener('click', function() {
        ul.scrollBy(300, 0)
    })
}

slider()



window.$ = $;
window.jQuery = $;