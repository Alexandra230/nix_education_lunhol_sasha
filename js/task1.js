const citiesAndCountries = {
  Киев: 'Украина',
  'Нью-Йорк': 'США',
  Амстердам: 'Нидерланды',
  Берлин: 'Германия',
  Париж: 'Франция',
  Лиссабон: 'Португалия',
  Вена: 'Австрия',
};

function countriesAndCities(obj) {
  let city = Object.keys(obj);
  let country = Object.values(obj);
  let arr = [];
  for (let i = 0; i < city.length; i++) {
    arr.push(`${city[i]} - это ${country[i]}`);
  }
  console.log(arr);
}
countriesAndCities(citiesAndCountries);
