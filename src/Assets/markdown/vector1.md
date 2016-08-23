## Vector Tiles

Congratulations! If you've made it this far you've learned how to build basic maps, a few styling rules, and the many uses of data filters. Now we're about to head into the heart of Tangram and learn how we can get free data about any place on earth.

Let's go back to the map we've been building in previous sections. We've managed to draw our countries, but what if we wanted to color the oceans? Like so:

[section]
{ "type": "image", "width": "60%", "src": "oceans.png" }
[section]

With our current GeoJSON file we can't really do that, because the only data it provides is countries (represented as polygons). This is where vector tiles come in. The <a href="https://mapzen.com/projects/vector-tiles/" target="&#95;blank">Mapzen vector tile service</a> provides worldwide basemap coverage sourced from <a href="http://www.openstreetmap.org/" target="&#95;blank">OpenStreetMap</a> and other open data projects, updated daily as a free and shared service. But what is a vector tile to begin with?

### What is a vector tile?

Simply put, vector tiles are squares of math. Instead of a web server sending you a pre-drawn image tile, a vector tile contains the geometry for a particular part of the earth, delivered on demand. It contains instructions on what can be drawn, rather than something already drawn and styled. Below is a snippet of a vector tile in GeoJSON; as you can see it contains mathematical descriptions and metadata of buildings, roads and other features.

[section]
{ "type": "image", "width": "60%", "src": "vectortiles.gif" }
[section]

How to draw the tile is up to the vector-friendly visualization tool (usually SVG, Canvas, WebGL, or Tangram) in the web browser. Buildings and roads can be rendered in different ways (or not at all) once the vector tile is downloaded — no need to head back to the server and fetch a different set of tiles if you want to filter the output. This means that there’s no need to re-render millions of tiles if you change your mind about the style of a road or the color of a building.

### A simple map using vector tiles

With that in mind let's take a look at a simple map we can build with the Mapzen Vector Tile service and see how simple it is to obtain the data we need to color oceans:

[section]
{ "type": "tangram", "src": "vector.yaml", "lines": "4,10,19" }
[section]

How did we get the earth and water layer? They're conveniently included in the Mapzen Vector Tile service, which pulls in data from OpenStreetMap and many more open data projects. The tile service provides map data organized into several thematic layers, each of which is name, for example: `buildings`, `landuse`, and `water`. We'll go into all the available layers in the next section of this tutorial.

<div class='alert alert-info'>
For a full listing of the data sources in the Mapzen Vector Tile service check out [data sources](https://mapzen.com/documentation/vector-tiles/data-sources/).
</div>

### A reminder about order

Remember that layer order matters when we're styling a map. Take a look at what happens if we revert the water and earth layer orders. If we place the earth layer (order 1) on top of the water layer (order 0) then we wouldn't get any landlocked bodies of water like lakes and rivers!

[section]
{ "type": "tangram", "src": "vector2.yaml", "lines": "15,24" }
[section]
