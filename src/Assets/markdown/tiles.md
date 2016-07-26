## Vector Tiles

Congratulations! If you've made it this far you've learned how to build basic maps, a few styling rules, and the many uses of data filters. Now we're about to head into the heart of Tangram and learn how we can get free data about any place on earth.

Let's go back to the map we've been building in previous sections. We've managed to draw our countries, but what if we wanted to color the oceans? With our current GeoJSON file we can't really do that, because the only data it provides is countries (represented as polygons). This is where vector tiles come in.

The <a href="https://mapzen.com/projects/vector-tiles/" target="&#95;blank">Mapzen vector tile service</a> provides worldwide basemap coverage sourced from <a href="http://www.openstreetmap.org/" target="&#95;blank">OpenStreetMap</a> and other open data projects, updated daily as a free & shared service.

### What is a vector tile?

Simply put, vector tiles are squares of math. Instead of a web server sending you a pre-drawn image tile, a vector tile contains the geometry for a particular part of the earth, delivered on demand. It contains instructions on what can be drawn, rather than something already drawn and styled. Below is a snippet of a vector tile in GeoJSON; as you can see it contains mathematical descriptions and metadata of buildings, roads and other features.

[section]

How to draw the tile is up to the vector-friendly visualization tool (usually SVG, Canvas, WebGL, or Tangram) in the web browser. Buildings and roads can be rendered in different ways (or not at all) once the vector tile is downloaded — no need to head back to the server and fetch a different set of tiles if you want to filter the output. There’s no need to re-render millions of tiles if you change your mind about the style of a road or the color of a building.

### A simple map using vector tiles

With that in mind let's take a look at a simple map we can build with the Mapzen Vector Tile service and see how simple it is to obtain the data we need to color oceans:

[section]

How did we get the earth and water layer?

TODO: talk about OSM layers stuff we're feeding

### A reminder about order

Remember that layer order matters when we're styling a map. Take a look at what happens if we revert the water and earth layer orders. If we place the earth layer (order 1) on top of the water layer (order 0) then we wouldn't get any landlocked bodies of water like lakes and rivers!

[section]

### URL syntax

Notice that our source URL looks a little different than the GeoJSON and TopoJSON we've been using so far. It's because we're linking directly to the Mapzen Vector Tile service, which provides vector tiles in a variety of formats. The following three sources are equivalent in the data that they provide; what's different is the encoding format of that data.

`http://vector.mapzen.com/osm/all/{z}/{x}/{y}.topojson` TopoJSON format

`http://vector.mapzen.com/osm/all/{z}/{x}/{y}.json` GeoJSON format

`http://vector.mapzen.com/osm/all/{z}/{x}/{y}.mvt` Mapbox Vector Tiles format

<div class='alert-message'>
We recommend TopoJSON format for desktop web development, and MVT format for native mobile development. The Mapzen server gzips tiles automatically, so the TopoJSON file format is comparable in file size to MVT over the wire, and it’s much friendlier to debug.
</div>

### Sourcing Individual Layers

In reality you can also replace the `all` in the url with any number of layers of your choice. Layer names filter the geometry that is delivered: buildings and roads and water are but a few examples. Multiple layer names can be combined in the URL, such as roads and water:

`https://vector.mapzen.com/osm/earth/{z}/{x}/{y}.topojson`

or

`https://vector.mapzen.com/osm/earth,water/{z}/{x}/{y}.topojson`   

<br>
Importantly, though, if you only import one layer, you must leave out the `data: layer` filter. Otherwise you can apply the data filter as usual. Take a look at the two examples below:

[section]

<div class='alert-message'>
If you're curious, here is what a single sample TopoJSON tile looks like: `https://vector.mapzen.com/osm/all/16/19293/24641.topojson?api_key=vector-tiles-xxxxxxx`
</div>

[section]

-What is included in the vector tiles? How to explain difference with Mapbox?
    * Renamed many things from OSM. Based off of.
    * POI: minutely feed - tile build queue. Hours/Days. Check Rob with most current up to date.
    * Mapbox Vector Tiles - MVT smaller payload. Have to do some more processing on client side. Protocol buffers.
-Can I she sample of the {x},{y}
-API keys?
    * Tutorials Key
-what do you think are most important distinctions here?
https://mapzen.com/documentation/vector-tiles/layers/
