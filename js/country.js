const loadCountries =()=>{
    fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>displayCountries(data))
}
const countryContainer = document.getElementById('countries-container');
const displayCountries =(countries)=>{
    countries.forEach(country => {
     console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        countryDiv.innerHTML=`
        <h3> Name:${country.name.common} </h3>
        <p> Capital::${country.capital?country.capital[0]:'no capital' } </p>
        <button onclick="loadCountryDetail('${country.cca2}')"> display Detail</button>
        `;

        countryContainer.appendChild(countryDiv);

    });
}

const loadCountryDetail =(code)=>{
  const url =`
  
https://restcountries.com/v3.1/alpha/${code}
  `
 console.log(url) ;
}


loadCountries();
