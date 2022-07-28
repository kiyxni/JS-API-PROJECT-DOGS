// FREE API'S HERE: https://github.com/public-apis/public-apis 

/*const getCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => console.log(json))
}

console.log(getCountry())

document.querySelector('body').innerHTML += 'Hello'*/

let searchButton = document.getElementById("search-btn");
let countryInput = document.getElementById("country-input");

searchButton.addEventListener("click", () => {
    let countryName = "China";
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`; 
    console.log(finalURL);

    fetch(finalURL).then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].languages);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);

result.innerHtml = `
<img src="${data[0].flags.svg}"
class="flag-img">
<h2>${data[0].name.common}</h2>
`;

    });
});