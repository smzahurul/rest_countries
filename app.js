fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
        const countriesDiv = document.getElementById('countries-name');
        countries.forEach(country => {
            const countryDiv = document.createElement('div');
            countryDiv.className = "country"

            const countryInfo = `
        <h2 class="country-name"> ${country.name}</h2>
        <p> Capital Name: ${country.capital}</p>
        <p> Region: ${country.region}</p>
        <p> Population: ${country.population}</p>
        <p> Area: ${country.area}</p>
        <img src="${country.flag}">
        
        `
            countryDiv.innerHTML = countryInfo;
            countriesDiv.appendChild(countryDiv);
        });
    }
    // const displayCountryDetail = name => {

//     console.log(name);
// }

// 

// <p>${country.population}</p>
// <p>${country.latlng}</p>
// for (let i = 0; i < countries.length; i++) {
//     const country = countries[i];
//     const countryDiv = document.createElement('div');

//     // const h3 = document.createElement('h3');
//     // h3.innerText = country.name;
//     // const p = document.createElement('p');
//     // p.innerText = country.capital;
//     // countryDiv.appendChild(h3);
//     // countryDiv.appendChild(p);

//     countryDiv.className = "country"

//     const countryInfo = `
//     <h2 class="country-name">${country.name}</h2>
//     <p>${country.capital}</p>
//     <p>${country.region}</p>
//     <p>${country.population}</p>
//     <p>${country.latlng}</p>
//     `
//     countryDiv.innerHTML = countryInfo;
//     countriesDiv.appendChild(countryDiv);



// }