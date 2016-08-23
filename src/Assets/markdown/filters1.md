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
{ "type": "tangram", "src": "filters.yaml", "lines": "21-27" }
[section]
