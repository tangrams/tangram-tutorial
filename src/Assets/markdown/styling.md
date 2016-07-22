## Styling

Let's talk about styling with `lines` by adding country borders. Since our geojson represents each country as a polygon or multipolygon, we know that there are edges (or lines) in between each vertex (or point). We can use the `lines` style to draw these borders. And since we're using the same layer of data ('&#95;countryStyle'), we can simply declare a new style under the `draw` block.

[section]

## Layer Order

Let's talk about ordering our layers for styling. `order` is a parameter that sets the drawing order of the draw style. It is meant to be used in cases where layers cover the same pixel space, meaning that one layer will take precedence over another when they get drawn. You can use the `order` parameter to specify which higher-ordered layers should be drawn over lower-ordered layers. Try the exercise below:

[section]

## Labels

Finally, let's introduce one more styling concept before we jump into data filters. Remember the `text` style that we spoke about in the <a href="/#/minimum-map/min">Layers and Data Import</a> section? Well we can use that style for showing labels! Let's do that for our countries.

First, there's one line of magic sauce we need to add to our `sources` block in the form of `generate_label_centroids: true` (on line #5 below). This line tells Tangram to add new points to the data source, each located at the geometrical center (or "centroid") of every polygon in the data. We will use these new points for positioning our labels.

Second, we need to add another layer name with details for how to draw those labels. Let's call this layer `_textLayer` (line #23). Recall that all layers are composed of a `data` and `draw` block (<a href="/#/minimum-map/min">Layers and Data Import</a>) so let's add that information into our scene file (lines #24-33).

* `data` block: this block will be the same as the one for our `_countryLayer` style. We're using the same data source!
* `draw` block: here's where the rest of the labeling magic happens.
    * `style`: recall that we can choose from `points`, `polygons`, `lines`, `text`, and `raster`. Since we want to display a text label, let's choose `text`.
    * `font`: specifies the font for the label.
    * `text_source`: this parameter defines the source of the label. How do we know what source to use? Let's take another look at our geojson file on line #4.

<pre><code class="language-json">[...]
{
	"type": "Feature",
	"id": "ARG",
	"properties": {
		"name": "Argentina",
        "currencyCode": "ARS",
        "population": "41343201",
        "capital": "Buenos Aires",
        "continentName": "South America",
        "areaInSqKm": "2766890.0",
        "languages": "es,en,it,de,fr,gn"
	},
	"geometry": {
		"type": "MultiPolygon",
		"coordinates": [...coordinates...]
	}
}
[...]
</pre></code>

Essentially anything within the `properties` section can be used as a valid `text_source` as long as it is a string. If we use `text_source: name` as in the example below, Tangram will match the `name` property in the geojson and serve that as a label.

<div class='alert-message'>
All valid GeoJSON and TopoJSON files have a type member with the name "properties" - it's not something particular to the GeoJSON file we are using in this example.
</div>

[section]

Oh no! Take a close look at the map - what's going on with all the repeated labels (zoom in closer if you can't see them)?
