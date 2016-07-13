Now let's actually take a look at our data source, in this case
<a href='https://tangrams.github.io/tangram-tutorial/tangram-tutorial-files/countries-data.geojson'
target='&#95;blank'>https://tangrams.github.io/tangram-tutorial/tangram-tutorial-files/countries-data.geojson</a>. This is just a simple geojson file that represents every country in the world as a polygon or multipolygon. This code shows a small part of the file (note replacements where we've simplified the file with `[...]`):

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
