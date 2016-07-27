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
* Geometry types: `points` and `polygons`

<div class='alert-message'>
For each layer, we will provide a 'layer name' and 'geometry types'. Recall that the layer name is what we have been using as `layer: countries` and `layer: earth` in some of the previous examples. It's the way we tell Tangram what data source to use for a particular drawing style within a `layer` block.
<br><br>
We've also been using a few different geometry types in previous examples: `lines`, `polygons`, and `text`. Remember when we styled the <a href="/#/minimum-map/data">countries</a> we used `style: polygons`, when we styled our country <a href="/#/styling/lines">border</a> we used `style: lines` and for <a href="/#/styling/labels">labels</a> we used `style: text`.
</div>

For this next example, try zooming in on the map to see the green areas representing `landuse`.

[section]

In this map we're coloring in light green all the polygons captured in the `landuse` layer. What if we only want to display some types of landuse areas and not all of them? That's where we can go back to our data `filter` blocks.

The `landuse` layer comes with a property called `kind` that let's us specify different types of `landuse` values. Take a look at this next example to see how you can use a `filter` block to filter by kind. For a full list of `kind` values check out: [https://mapzen.com/documentation/vector-tiles/layers/#landuse](https://mapzen.com/documentation/vector-tiles/layers/#landuse).

<div class='alert-message'>
Each layer has specific properties like `kind` that are useful for different purposes. We'll be mentioning a few properties for each layer in this tutorial, but a full list of properties per layer are avilable on the mapzen docs: [https://mapzen.com/documentation/vector-tiles/layers/](https://mapzen.com/documentation/vector-tiles/layers/).
</div>

[section]

We've used the `draw: polygons` geometry because we're drawing the actual areas of landuse. The `points` geometry will be useful later ahead when we draw labels.

One last point about the `landuse` layer: notice that if you zoom out at some point the green polygons become unnoticeable. Tangram is doing some work behind the scenes to decide what appropriate features to display at different zoom levels.

<div class='alert-message'>
In terms of the specific data Tangram is sourcing, the `landuse` layer includes OpenStreetMap data at higher zoom levels, and Natural Earth data at lower zoom levels.
</div>

[section]

### Buildings layer

Let's keep adding layers! The next one we'll talk about is the `buildings` layer and here are the keywords to remember are:

* Layer name: `buildings`
* Geometry types: `points` and `polygons`

As the names suggests, this layer provides building footprint data (in the form of polygons) and addresses (in the form of points). The building data starts at zoom level 13 by including huge buildings, and progressively adding all buildings at zoom 16+. Address points are available at zoom 16+; they are suitable for display at zoom level 17 and higher.

Look at the next example to see just how easy it is to draw building data:

[section]

### Roads and transportation layer

Let's work on one last layer before going into a section on Tangram tips.

The `roads` layer is super useful and provides exactly what you might imagine: highways, major roads, minor roads, paths, railways, ferries, and ski pistes. Keywords to remember here are:

* Layer name: `roads`
* Geometry types: `lines`

Look how easy it is to add roads to our map:

[section]

Again, this layer has a `kinds` property that lets you filter how to draw different types of roads. The `kinds` property for this layer can take on values of: `aerialway`, `exit`, `ferry`, `highway`, `major_road`, `minor_road`, `path`, `piste`, `racetrack`, or `rail`.

Let's add a `filter` block to see how this property might be useful for us. In this next example we'll only show `ferry` and `highway` roads:

[section]

<div class='alert-message'>
To improve performance, some road segments are merged at low and mid-zooms. To facilitate this, certain properties are dropped at those zooms. The exact zoom varies per feature class (major roads keep this properties over a wider range, minor roads drop them starting at zoom 14).
</div>

But now what if we wanted to color only the highways or only the ferry lines in a certain color? How do we do that in the current syntax? The answer is that you need to declare a sublayer - which is the topic of our next section.

[section]

## Sublayers

Sublayer is a feature that we haven't spoken about in previous sections, but becomes especially useful when using the Mapzen Vector Tile service. Recall that we need at least one layer and some styling rules to create a minimum map. We've been declaring layers like so ('&#95;countryLayer' is our layer name):

<pre><code class="language-yaml">layers:
    &#95;countryLayer:
        data:
            source: &#95;mapzen
            layer: countries
        draw:
            &#95;countryStyle:
                style: polygons
                color: darkgreen
</pre></code>

In reality Tangram allows you to declare any number of sublayers below '&#95;countryLayer'.

<pre><code class="language-yaml">layers:
    &#95;roadsLayer:
        data:
            source: &#95;mapzen
            layer: roads
        draw: ...
        filter: ...
        &#95;sublayer1:
            draw: ...
            filter: ...
        &#95;sublayer2:
            draw: ...
            filter: ...
            &#95;subsublayer:
                draw: ...
                filter: ...
</pre></code>

The only parameter you do not need to include in a sublayer is the `data` block. This is unnecessary, because the the data in the parent layer (in the example above '&#95;roadsLayer') applies to the sublayers.

With that in mind, let's add a sublayer to specifically color the roads with a kind property of `highway` in a different color:

[section]

## Let Tangram Handle Order

Wow! At this point we've used five layers from the Mapzen Vector Tile service: `earth`, `water`, `landuse`, `buildings`, and `roads`. Hopefully you've been getting the hang of how the layers work and how much useful data they provide. At this point, it's useful to introduce a handy feature that Tangram provides to help you get the layer order right.

Ordering of features - which ones draw “on top of” other features - can be an important feature of display maps. To help out with this, we export a `sort_key` property on some features which suggests in what order the features should appear. Lower numbers mean that features should appear “towards the back” and higher numbers mean “towards the front”. These numbers are consistent across layers. The layers which include `sort_key` on their features are: `boundaries`, `buildings`, `earth`, `landuse`, `roads`, `transit` and `water`.

The way we use `sort_key` is via a function on the `order` parameter like so:

<pre><code class="language-yaml">order: function() { return feature.sort_key; }
</pre></code>

<div class='alert-message'>
Do you recall the <a href="/#/filters/functions">function filters</a> section where we discussed the keyword `feature`? Tangram provides a `feature` keyword for accessing properties of layers. The Tangram Vector Tile service includes a `sort_key` property that we are accessing by using this particular keyword in the function.
</div>

Check out how we can apply `sort_key` to the previous example to get the same expected results:

[section]

In addition, to facilitate data visualization overlays and underlays, the following order ranges are suggested for your own scene files:

* `0-9`: Under everything. Tip: disable `earth` layer.
* `190-199`: Under `water`. Above `earth` and most `landuse`.
* `290-299`: Under `roads`. Above `borders`, `water`, `landuse`, and `earth`. Your classic “underlay”.
* `490-499`: Over all lines and polygons features. Under map labels (icons and text), under UI elements (like routeline and search result pins). Your classic raster map overlay.

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
