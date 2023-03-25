import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { CountryCardsList, CountryCard } from './markup';

const inputEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

inputEl.addEventListener(
  'input',
  debounce(handleSearchCountry, DEBOUNCE_DELAY)
);


function handleSearchCountry (event) {
  event.preventDefault();

  let searchQuery = event.target.value.trim().toLowerCase();
  if (!searchQuery) {
    return
  }

  fetchCountries(searchQuery)
    .then(data => {
      if (data.length >= 2 && data.length <= 10) {
        cleanUpRenderCountryCard();
        return renderCountryCardsList(data);
      } else if (data.length === 1) {
        cleanUpRrenderCountryCardsList();
        return renderCountryCard(data);
        
      } else {
        return handleTooMatshesFound;
      }
    })
    .catch(handleFetchError);
    // .finaly(() => searchQuery.reset());

}

function renderCountryCardsList(data) {
  const markup = data.map(CountryCardsList).join('');
  countryListEl.innerHTML = markup;
}

function renderCountryCard(data) {
  const markup = data.map(CountryCard).join('');
  countryInfoEl.innerHTML = markup;
}

function cleanUpRrenderCountryCardsList() {
  countryListEl.innerHTML = '';
}

function cleanUpRenderCountryCard() {
   countryInfoEl.innerHTML = '';
}

function handleTooMatshesFound() {
  return Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function handleFetchError() {
  return Notiflix.Notify.warning('Oops, there is no country with that name');
}