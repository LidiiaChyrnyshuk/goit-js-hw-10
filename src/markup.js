export function CountryCardsList({ flags, name }) {
  return `<li class="country-list_item">
        <img class="country-list_svg" src="${flags.svg}"alt="countries flag" width="30px" height="20px">
        <p class="country-list_name">${name}</p>
      </li>`
}

export function CountryCard({ flags, name, capital, population, languages }) {
  const langStr = Object.values(languages);

  return `<div class="country-info_title">
        <img class="country-info_title-svg" src="${flags.svg}" alt="countries flag" width="60px" height="40px">
        <p class="country-info_title-name">${name.official}</p>
      </div>
      <div class="description">
        <p class="description_title">Capital: <span class="description_text">${capital}</span></p>
      <p class="description_title">Populatio: <span class="description_text">${population}</span></p>
      <p class="description_title">Languages: <span class="description_text">${langStr}</span></p>
      </div>`
}