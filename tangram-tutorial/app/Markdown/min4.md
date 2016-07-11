What else is going on here? How are we styling the countries layer? We are specifying how to display the countries layer within the `draw` element.

<pre><code class="language-yaml">draw:
    &#95;countryStyle: # We're giving this draw group a name '&#95;countryStyle'
        style: polygons # Tangram comes with a prebuilt set of styles for different data types: points, polygons, lines, and text
        color: darkgreen # The color of the layer we are drawing
</pre></code>

How do we know what style to apply to what data? Well our geojson file contains some clues. Take another look at the file:

<pre><code class="language-json">[...]
{
	"type": "Feature",
	"id": "ARG",
	"properties": {
		"name": "Argentina"
	},
	"geometry": {
		"type": "MultiPolygon",
		"coordinates": [...coordinates...]
	}
}
[...]
</pre></code>

Each country is composed of a geometry which in this case is of type `MultiPolygon` but following the geojson specs could be a `Point`, `LineString`, `Polygon`, `MultiPoint`, or `MultiLineString`. Since each country is a multipolygon, we're styling the 'countries' layer with a `polygon` style. Try changing the styles in the following scene file to see what happens:
