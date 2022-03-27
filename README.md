# Mapping Earthquakes
## Overview
The goal of this project was to gain familiarity with leaflet by mapping earthquake data. Within the HTML file, leaflet CDNs are used to import leaflet styling and
functionality allowing for leaflet functions and methods to be utilized in the challenge_logic.js file. Within challenge_logic.js, the map was created and references the 
 id given to the div tag meant to hold the map in index.html. Three layers are added to the map each of which use a different mapbox style. The base layers are all added to 
a baseMaps object that is passed into the L.control.layers method which allows for the various layers to be toggled between. An overlay object was also passed into the same
method; this object contained three overlays. The three overlays, allEarthquakes, tectonics, and majorQuakes, were all created with new L.layerGroup(). The d3.json() method 
was used to retrieve the data for each of the overlays from various url's, and the overlays were then added to the map. For both sets of earthquake data, circleMarkers were 
added to the map with radii and color determined by the magnitude of the earthquake. The tectonic plate data was simply styled by line color and weight. 
## Resources
* [Mapbox](https://www.mapbox.com/) (where the api key is obtained and used for map data)
* [HTML]() 
* [JS]()

