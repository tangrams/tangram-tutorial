## Vector Tiles

Congratulations! If you've made it this far you've learned how to build basic maps, a few styling rules, and the many uses of data filters. Now we're about to head into the heart of Tangram and learn how we can get free data about any place on earth.

Let's go back to the map we've been building in previous sections. We've managed to draw our countries, but what if we wanted to color the oceans? Like so:

[section]

With our current GeoJSON file we can't really do that, because the only data it provides is countries (represented as polygons). This is where vector tiles come in. The <a href="https://mapzen.com/projects/vector-tiles/" target="&#95;blank">Mapzen vector tile service</a> provides worldwide basemap coverage sourced from <a href="http://www.openstreetmap.org/" target="&#95;blank">OpenStreetMap</a> and other open data projects, updated daily as a free & shared service. But what is a vector tile to begin with?

### What is a vector tile?

Simply put, vector tiles are squares of math. Instead of a web server sending you a pre-drawn image tile, a vector tile contains the geometry for a particular part of the earth, delivered on demand. It contains instructions on what can be drawn, rather than something already drawn and styled. Below is a snippet of a vector tile in GeoJSON; as you can see it contains mathematical descriptions and metadata of buildings, roads and other features.

[section]

How to draw the tile is up to the vector-friendly visualization tool (usually SVG, Canvas, WebGL, or Tangram) in the web browser. Buildings and roads can be rendered in different ways (or not at all) once the vector tile is downloaded — no need to head back to the server and fetch a different set of tiles if you want to filter the output. This means that there’s no need to re-render millions of tiles if you change your mind about the style of a road or the color of a building.

### A simple map using vector tiles

With that in mind let's take a look at a simple map we can build with the Mapzen Vector Tile service and see how simple it is to obtain the data we need to color oceans:

[section]

How did we get the earth and water layer? They're conveniently included in the Mapzen Vector Tile service, which pulls in data from OpenStreetMap and many more open data projects. The tile service provides map data organized into several thematic layers, each of which is name, for example: `buildings`, `landuse`, and `water`. We'll go into all the available layers in the next section of this tutorial.

<div class='alert-message'>
For a full listing of the data sources in the Mapzen Vector Tile service check out [data sources](https://mapzen.com/documentation/vector-tiles/data-sources/).
</div>

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

### API keys

One last comment about URLs. We've been using a special app in this tutorial that let's us embed Tangram and scene file code in one single view. If you go on to deploy a Tangram scene file on your own, you will need an API key. API keys come in the pattern: `vector-tiles-xxxxxxx` and can be obtained here: [https://mapzen.com/developers/sign_in](https://mapzen.com/developers/sign_in). A full URL pattern would look something like this, where you should replace `xxxxxxx` with your particular API key:

`https://vector.mapzen.com/osm/all/{z}/{x}/{y}.topojson?api_key=vector-tiles-xxxxxxx`

<div class='alert-message'>
If you're curious, here is what a single sample TopoJSON tile looks like: `https://vector.mapzen.com/osm/all/16/19293/24641.topojson?api_key=vector-tiles-xxxxxxx`
</div>

[section]

## Vector Tile Layers

As we've already explored, the Mapzen Vector Tile service conveniently includes data about the world in the form of data layers. In the previous section we built a map with two of these layers: `earth` and `water`. What are the rest? The service includes a total of 9 layers: `boundaries`, `buildings`, `landuse`, `places`, `pois`, `roads`, `transit`, `earth`, and `water`. Let's work on building up our previous map example to see how we can use and combine more layers.

As a reminder this is what our code looked like in the last section, where we were using the `earth` and `water` layers:

<pre><code class="language-yaml">
sources:
    &#95;mapzen:
        type: TopoJSON
        url:  https://vector.mapzen.com/osm/all/{z}/{x}/{y}.topojson

layers:
    &#95;earthLayer:
        data:
            source: &#95;mapzen
            layer: earth
        draw:
            polygons:
                order: 0
                color: '#ddeeee'
    &#95;waterLayer:
        data:
            source: &#95;mapzen
            layer: water
        draw:
            polygons:
                order: 1
                color: '#88bbee'
</pre></code>

### Landuse layer

Let's try adding a `landuse` layer to our code. This layer is used to describe the primary use of land by humans. In Tangram the layer captures areas like: parks, forests, residential areas, commercial areas, industrial areas, universities, sports centers, hospitals, zoos, among others.

The keywords to remember for this layer are:

* Layer name: `landuse`
* Geometry types: `point` and `polygon`

<div class='alert-message'>
For each layer, we will provide a 'layer name' and 'geometry types'. Recall that the layer name is what we have been using as `layer: countries` and `layer: earth` in some of the previous examples. It's the way we tell Tangram what data source to use for a particular drawing style within a `layer` block.
<br><br>
We've also been using a few different geometry types in previous examples: `lines`, `polygons`, and `text`. Remember when we styled the [countries](/#/minimum-map/data) we used `style: polygons`, when we styled our country [borders](/#/styling/lines) we used `style: lines` and for [labels](/#/styling/labels) we used `style: text`.
</div>

[section]

If you're curious, in terms of the specific data Tangram is sourcing, the layer includes OpenStreetMap data at higher zoom levels, and Natural Earth data at lower zoom levels.

[section]

### Boundaries and Barriers

This layer includes all of those things you would expect to be boundaries as well as a few other goodies: OpenStreetMap administrative boundaries (national borders, provinces, regions, municipalities, cities), Natural Earth boundaries (such as maritime boundaries), and even a few details at high zoom levels like the fence lines around some petting zoos. They keywords you should remember for this layer are:

* Layer name: `boundaries`
* Geometry types: `lines`

[section]

-What is included in the vector tiles? How to explain difference with Mapbox?
    * Renamed many things from OSM. Based off of.
    * POI: minutely feed - tile build queue. Hours/Days. Check Rob with most current up to date.
    * Mapbox Vector Tiles - MVT smaller payload. Have to do some more processing on client side. Protocol buffers.
-Can I she sample of the {x},{y}
