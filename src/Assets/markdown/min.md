## What is the minimum map I can build?

Let's get right to it and style the most basic map we can build with Tangram.

To create a map, the scene file requires only:

* a data source (vector tiles)
* data interpretation rules (filters)
* styling rules (how the data should look on the map)

<div class='alert-message'>
We'll be using a special app that embeds Tangram code on the right and a Leaflet/Tangram map on the left to instantly view the results of our scene file. Take a look below!
</div>

[section]

Let's unpack this example. First of all, note that our `sources` and `layers` blocks are required elements for all valid Tangram scene files. Try commenting them out with `#` to see what happens. You should see the map on the left go black.

### Data sources

Let's talk about the `sources` block first. As the word indicates, this is the place where we define our data sources and tell the Tangram engine where to get its vector tiles from. The block takes only one type of parameter, a <strong>source name</strong>.

<pre><code class="language-yaml">sources:
    &#95;mapzen: # A source name
        type: GeoJSON
        url: https://tangrams.github.io/tangram-tutorial/src/Assets/tutorial-files/countries.geojson
</code></pre>

The source name is important because you will need to use it elsewhere in the Tangram scene file. Think of it as a variable name that you can refer to again and again throughout the scene file. The `sources` block can take any number of source names, and each of those can be named anyway you'd like.

<pre><code class="language-yaml">sources:
    &#95;stamen: # A source name
        type: Raster
        url: http://a.tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg
    &#95;mapzen: # Another source name
        type: GeoJSON
        url: https://tangrams.github.io/tangram-tutorial/src/Assets/tutorial-files/countries.geojson
</code></pre>

<div class='alert-message'>For this tutorial, non-required variable names will be prepended with a `_` to avoid confusion with reserved keywords.
In the example above `_stamen` and `_mapzen` can be thought of as variable names. Instead, `sources` and `layers` are reserved keywords.</div>

Each source name in turn requires two pieces of information:

* a `type`: the type of the datasource. It can be any one of four options:
    * `TopoJSON`
    * `GeoJSON`
    * `MVT` (Mapbox Vector Tiles)
    * `Raster`
* a `url`: the data source's url

<br>

[section]

### Layers and Data Import

So how will we be using the data we just imported? Let's start by unpacking what we've written in the `layers` block. Vector tiles typically contain top-level structures which can be thought of as “layers” – inside a GeoJSON file, these would be the FeatureCollection objects. Inside a Tangram scene file, the layers object allows you to split the data by layer, by matching against the layer name.

[section]

Now let's actually take a look at our data source, in this case
<a href='https://tangrams.github.io/tangram-tutorial/src/Assets/tutorial-files/countries-data.geojson'
target='&#95;blank'>https://tangrams.github.io/tangram-tutorial/src/Assets/tutorial-files/countries-data.geojson</a>. This is just a simple geojson file that represents every country in the world as a polygon or multipolygon. This code shows a small part of the file (note replacements where we've simplified the file with `[...]`):

<pre><code class="language-json">{
	"countries": {
		"type": "FeatureCollection",
		"features": [
			{
				"type": "Feature",
				"id": "ARG",
				"properties": {
					"name": "Argentina",
					[...more properties...]
				},
				"geometry": {
					"type": "MultiPolygon",
					"coordinates": [...coordinates...]
				}
			},
			{
				"type": "Feature",
				"id": "AUS",
				"properties": {
					"name": "Australia",
					[...more properties...]
				},
				"geometry": {
					"type": "MultiPolygon",
					"coordinates": [...coordinates...]
				}
			},
			[...other countries...]
		]
	}
}
</pre></code>

<div class='alert-message'>
An explanation of the GeoJSON and TopoJSON standards is beyond the scope of this tutorial. For a good resource check out: [http://www.macwright.org/2015/03/23/geojson-second-bite.html](http://www.macwright.org/2015/03/23/geojson-second-bite.html)
</div>

Note that we are specifying what layer name to match against on the highlighted line 12 in the next example. Try editing the Tangram scene file yourself on lines 8 and 12.

<pre><code class="language-yaml">&#95;countryLayer:
        data:
            source: &#95;mapzen
            layer: countries # matching to the 'countries' layer in the geojson file
</pre></code>

[section]

What else is going on here? How are we styling the countries layer? We are specifying how to display the countries layer within the `draw` element.

<pre><code class="language-yaml">draw:
    &#95;countryStyle: # We're giving this draw group a name '&#95;countryStyle'
        style: polygons # Tangram comes with a prebuilt set of styles for different data types: points, polygons, lines, text, and raster
        color: darkgreen # The color of the layer we are drawing
</pre></code>

How do we know what style to apply to what data? Well our geojson file contains some clues. Take another look at the file:

<pre><code class="language-json">[...]
{
	"type": "Feature",
	"id": "ARG",
	"properties": {
		"name": "Argentina",
        [...more properties...]
	},
	"geometry": {
		"type": "MultiPolygon",
		"coordinates": [...coordinates...]
	}
}
[...]
</pre></code>

Each country is composed of a geometry which in this case is of type `MultiPolygon` but following the geojson specs could be a `Point`, `LineString`, `Polygon`, `MultiPoint`, or `MultiLineString`. Since each country is a multipolygon, we're styling the 'countries' layer with a `polygon` style. Try changing the styles in the following scene file to see what happens:

[section]

Tangram did not interpret the data correctly when using a `text` or `raster` style because the data is not encoded as any of these. As a consequence, the map renders nothing at all. For `lines` we need to add an extra element we'll go into in a bit. On the other hand when we use `points` Tangram is rendering the vertices (or points) of each polygon in our 'country' layer.

<div class='alert-message'>
The TopoJSON and MVT (Mapbox Vector Tiles) are structured in a similar way to GeoJSON files, so these geometric properties still apply. Raster files are different and we will cover them later on in the tutorial.
</div>
