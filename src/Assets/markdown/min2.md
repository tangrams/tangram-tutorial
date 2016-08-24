## Layers and data import

How will we be using the data we just imported? Let's start by unpacking what we've written in the `layers` block. Vector tiles typically contain top-level structures which can be thought of as “layers” – inside a GeoJSON file, these would be the FeatureCollection objects. Inside a Tangram scene file, the layers object allows you to split the data by layer, by matching against the layer name.

[section]
{ "type": "tangram", "src": "layers.yaml", "lines": "2,9" }
[section]

Now let's actually take a look at our data source, in this case
<a href='https://tangrams.github.io/tangram-tutorial/src/Assets/tutorial-files/countries-data.GeoJSON'
target='&#95;blank'>https://tangrams.github.io/tangram-tutorial/src/Assets/tutorial-files/countries-data.GeoJSON</a>. This is just a simple GeoJSON file that represents every country in the world as a polygon or multipolygon. This code shows a small part of the file (note replacements where we've simplified the file with `[...]`):

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

<div class='alert alert-info'>
An explanation of the GeoJSON and TopoJSON standards is beyond the scope of this tutorial. For a good resource check out: [http://www.macwright.org/2015/03/23/GeoJSON-second-bite.html](http://www.macwright.org/2015/03/23/GeoJSON-second-bite.html)
</div>

Note that we are specifying what layer name to match against on the highlighted line 12 in the next example. Try editing the Tangram scene file yourself on lines 8 and 12.

<pre><code class="language-yaml">&#95;countryLayer:
        data:
            source: &#95;mapzen
            layer: countries # matching to the 'countries' layer in the GeoJSON file
</pre></code>

[section]
{ "type": "tangram", "src": "layers2.yaml", "lines": "8,12" }
[section]

What else is going on here? How are we styling the countries layer? We are specifying how to display the countries layer within the `draw` element.

<pre><code class="language-yaml">draw:
    &#95;countryStyle: # We're giving this draw group a name '&#95;countryStyle'
        style: polygons # Tangram comes with a prebuilt set of styles for different data types: points, polygons, lines, text, and raster
        color: darkgreen # The color of the layer we are drawing
</pre></code>

How do we know what style to apply to what data? Well our GeoJSON file contains some clues. Take another look at the file:

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

Each country is composed of a geometry which in this case is of type `MultiPolygon` but following the GeoJSON specs could be a `Point`, `LineString`, `Polygon`, `MultiPoint`, or `MultiLineString`. Since each country is a multipolygon, we're styling the 'countries' layer with a `polygon` style. Try changing the styles in the following scene file to see what happens:

[section]
{ "type": "tangram", "src": "layers3.yaml", "lines": "13" }
[section]

Tangram did not interpret the data correctly when using a `text` or `raster` style because the data is not encoded as any of these. As a consequence, the map renders nothing at all. For `lines` we need to add an extra element we'll go into in a bit. On the other hand when we use `points` Tangram is rendering the vertices (or points) of each polygon in our 'country' layer.

<div class='alert alert-info'>
The TopoJSON and MVT (Mapbox Vector Tiles) are structured in a similar way to GeoJSON files, so these geometric properties still apply. Raster files are different and we will cover them later on in the tutorial.
</div>
