## Labels

Finally, let's introduce one more styling concept before we jump into data filters. Remember the `text` style that we discussed in the <a href="/#/minimum-map/min">Layers and Data Import</a> section? Well we can use that style for showing labels! Let's do that for our countries.

First, there's one line of magic sauce we need to add to our `sources` block in the form of `generate_label_centroids: true` (on line #5 below). This line tells Tangram to add new points to the data source, each located at the geometrical center (or "centroid") of every polygon in the data. We will use these new points for positioning our labels.

Second, we need to add another layer name with details for how to draw those labels. Let's call this layer `_textLayer` (line #23). Recall that all layers are composed of a `data` and `draw` block (<a href="/#/minimum-map/min">Layers and Data Import</a>) so let's add that information into our scene file (lines #24-33).

* `data` block: this block will be the same as the one for our `_countryLayer` style. We're using the same data source!
* `draw` block: here's where the rest of the labeling magic happens.
    * `style`: recall that we can choose from `points`, `polygons`, `lines`, `text`, and `raster`. Since we want to display a text label, let's choose `text`.
    * `font`: specifies the font for the label.
    * `text_source`: this parameter defines the source of the label. How do we know what source to use? Let's take another look at our GeoJSON file on line #4.

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

Essentially anything within the `properties` section can be used as a valid `text_source` as long as it is a string. If we use `text_source: name` as in the example below, Tangram will match the `name` property in the GeoJSON and serve that as a label.

<div class='alert alert-info'>
All valid GeoJSON and TopoJSON files have a type member with the name "properties" - it's not something particular to the GeoJSON file we are using in this example. Mapbox Vector Tiles also have a "properties" member.
</div>

[section]
{ "type": "tangram", "src": "labels.yaml", "lines": "5,28-35" }
[section]

Oh no! Take a close look at the map - what's going on with all the repeated labels (zoom in closer if you can't see them)? This is where we go back to the magic sauce `generate_label_centroids: true` on line 5.

For each point that Tangram has generated at the centroid of each polygon, it has also created a `{"label_placement" : "yes"}` property. This is how we'll filter for just those points within our `_labelStyle` style. To do so we need something called a `filter` block - which we'll go into later. For now, just note the additional lines 33-34 that filter just the points at the centroid of each polygon.

<div class='alert alert-warning'>
If the feature in question is a multipolygon, the centroid point will be added to the largest polygon in the group.
</div>

[section]
{ "type": "tangram", "src": "labels2.yaml", "lines": "33-34" }
[section]
