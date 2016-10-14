## Let Tangram Handle Order

Wow! At this point we've used five layers from the Mapzen Vector Tile service: `earth`, `water`, `landuse`, `buildings`, and `roads`. Hopefully you've been getting the hang of how the layers work and how much useful data they provide. At this point, it's useful to introduce a handy feature that Tangram provides to help you get the layer order right.

Ordering of features&mdash;which ones draw “on top of” other features&mdash;can be an important feature of display maps. To help out with this, we export a `sort_rank` property on some features which suggests in what order the features should appear. Lower numbers mean that features should appear “towards the back” and higher numbers mean “towards the front.” These numbers are consistent across layers. The layers which include `sort_rank` on their features are: `boundaries`, `buildings`, `earth`, `landuse`, `roads`, `transit` and `water`.

The way we use `sort_rank` is via a function on the `order` parameter like so:

<pre><code class="language-yaml">order: function() { return feature.sort_rank; }
</pre></code>

<div class='alert alert-warning'>
Do you recall the <a href="/#/filters/functions">function filters</a> section where we discussed the keyword `feature`? Tangram provides a `feature` keyword for accessing properties of layers. The Tangram Vector Tile service includes a `sort_rank` property that we are accessing by using this particular keyword in the function.
</div>

Check out how we can apply `sort_rank` to the previous example to get the same expected results:

[section]
{ "type": "tangram", "src": "vector9.yaml", "lines": "14,24,33,42,51,60", "location": "14/40.7180/-74.0020" }
[section]

<div class='alert alert-warning'>
Note what's going on in line #60. We're using the `function() { return feature.sort_rank + 1; }` function to set the order of the `_highwaySubLayer` but we have to add a `+ 1` to render the sublayer correctly. Why is that? Well, the highway layer should be one layer above the rest of the roads. Try removing the `+ 1` to see how the highways disappear. They're being rendered on the same level as the rest of the roads.
</div>

In addition, to facilitate data visualization overlays and underlays, the following order ranges are suggested for your own scene files:

* `0-9`: Under everything. Tip: disable `earth` layer.
* `190-199`: Under `water`. Above `earth` and most `landuse`.
* `290-299`: Under `roads`. Above `borders`, `water`, `landuse`, and `earth`. Your classic “underlay.”
* `490-499`: Over all lines and polygons features. Under map labels (icons and text), under UI elements (like routeline and search result pins). Your classic raster map overlay.
