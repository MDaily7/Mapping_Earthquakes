// console.log to ensure that the code is working
console.log('working');



// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// GeoJSON layer with pointToLayer
// L.geoJSON(sanFranAirport, {
//     pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//         .bindPopup(`<h2> ${feature.properties.name} </h2><hr><h3>${feature.properties.city}, ${feature.properties.country}</h3>`);
// }}).addTo(map);
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup(`<h2> Airport Code:${layer.feature.properties.faa}</h2><hr><h3>${layer.feature.properties.name}</h3>`);
// }}).addTo(map);
// create tile layer that will be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// dark layer
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// create baseMaps variable
let baseMaps = {
    Streets: streets,
    Dark: dark
};

// create a map object with a center and a zoom level
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});
// use control.layers to add both layers to the map
L.control.layers(baseMaps).addTo(map);


// airport url
let airportData = "https://raw.githubusercontent.com/MDaily7/Mapping_Earthquakes/main/majorAirports.json";
//use d3.json to access the data and then add the geoJSON() layer
d3.json(airportData).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            console.log(feature);
            return L.marker(latlng)
            .bindPopup(`<h2> Airport Code:${feature.properties.faa}</h2><hr><h3>${feature.properties.name}</h3>`);
        }})
    .addTo(map);
});


