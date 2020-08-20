import $ from 'jquery';
import { data } from "./data/data";
import { Render } from "./components/Render/Render";
import { getNewsTemplate } from "./components/news/news-template";
// import { getPartnersTemplate } from "./components/partners/partners-template";

import '../scss/app.scss';

const dataNews = data.news
// const dataPartners = data.partners

const renderNews = new Render('.news__content', getNewsTemplate, dataNews)
// const renderPartners = new Render('.partners__content', getPartnersTemplate, dataPartners)

import './components/slick-slider/slick-slider';
import './components/site-navigation__toggle/site-navigation__toggle';
import './components/search/search';

window.rn = renderNews
// window.rp = renderPartners

window.$ = $;
window.jQuery = $;