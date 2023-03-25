

const BASE_URL = `https://restcountries.com/v3.1/name/`;

export function fetchCountries (name) {
const searchParams = new URLSearchParams({
  name: this.name,
  capital: this.capital,
  population: this.population,
  flags: this.flags,
  languages: [],
});

  return fetch(`${BASE_URL}${name}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
;