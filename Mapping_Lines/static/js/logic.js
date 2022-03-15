// console.log to ensure that the code is working
console.log('working');
// create a map object with a center and a zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 6);
// create tile layer that will be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//  assign variable to cities array from cities.js
let cityData = cities;

// // for loop to create markers for each city on the map
//   for (let i = 0; i < cityData.length; i++) {
//       console.log(cityData[i]);
//       L.marker(cityData[i].location)
//       .addTo(map)
//   ;}
// forEach to create markers for each city on the map
// cityData.forEach(function (city) {
//     console.log(city);
//     L.marker(city.location)
//     .bindPopup(`<h2> ${city.city}, ${city.state}</h2> <hr> <h3>Population ${city.population.toLocaleString()}</h3>`)
//     .addTo(map);
// });
// create circle markers for each city with radii equal to the population sizes
cityData.forEach(function (city) {
    console.log(city);
    L.circle(city.location, {
        radius: city.population/25,
        color: 'orange',
        fillColor: 'orange',
        lineweight: 4 
    })
    .bindPopup(`<h2> ${city.city}, ${city.state}</h2> <hr> <h3>Population ${city.population.toLocaleString()}</h3>`)
    .addTo(map);
});