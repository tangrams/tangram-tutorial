## Feature Filters

Now that we have a map that displays countries and labels we can finally talk about feature filters. Once a top-level `layer` has been applied to a Tangram scene file, feature-level `filter` objects can be defined to filter by feature properties in the data, in order to further narrow down the data of interest and refine the styles applied to the data.

Recall our discussion of GeoJSON, TopoJSON, and Mapbox Vector Tiles properties in the <a href="/#/styling/labels">Labels</a> section. It's worth taking a look at our GeoJSON file once again.

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

Feature properties in our datasource are listed in a JSON member specifically named "properties", and we can use these to display different subsets of the data:

[section]

Conveniently, we can also filter with three types of boolean filter functions `not`, `any`, and `all`. They are logically equivalent to logical operators in most programming languages: NOT (!=), OR (||), and AND (&&) respectively.

`not` takes a single filter object as its input while `any` and `all` take lists of filter objects.

<div class='alert-message'>
Notice that we're using the '-' sign when working with `any` and `all`. It is not required for `not` because this filter only takes one object.
</div>

[section]

Lastly, Tangram provides the ability to write functions in Javascript within filter blocks. This is useful for highly customized or more complex queries. The only detail to remember when writing functions is that Tangram provides a `feature` keyword for accessing properties. So to access the `continentName` property one would write `feature.continentName`.

Take a look at a few examples below and note that only one function will work within the `filter` block. To use more than one function you need to embed them within an `any` or `all` block.
