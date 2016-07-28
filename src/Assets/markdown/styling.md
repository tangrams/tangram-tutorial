## Styling

Let's talk about styling with `lines` by adding country borders. Since our GeoJSON represents each country as a polygon or multipolygon, we know that there are edges (or lines) in between each vertex (or point). We can use the `lines` style to draw these borders. And since we're using the same layer of data ('&#95;countryStyle'), we can simply declare a new style under the `draw` block.

[section]

## Layer Order

Let's talk about ordering our layers for styling. `order` is a parameter that sets the drawing order of the draw style. It is meant to be used in cases where layers cover the same pixel space, meaning that one layer will take precedence over another when they get drawn. You can use the `order` parameter to specify which higher-ordered layers should be drawn over lower-ordered layers. Try the exercise below:

[section]

## Colors

Tangram gives you complete control over how you might choose to color a scene. With that in mind, we support a variety of color formats such as:

### 1. CSS colors

A variety of CSS color formats are available, as specified in the [W3C’s Cascading Style Sheets specification](http://www.w3schools.com/cssref/css_colors_legal.asp). None of this is specific to Tangram, they are color formats available to all CSS stylesheets.

* named colors: `red`, `blue`, `salmon`, `rebeccapurple`
* hex colors: `'#fff'`, `'000'`, `'#9CE6E5'`
* RGB colors: `rgb(255, 190, 0)`
* RGBA colors: `rgb(255, 190, 0, .5)`
* HSL colors: `hsl(180, 100%, 100%)`
* HSLA colors: `hsla(180, 100%, 100%, 50%)`

For example:
<pre class="no-margin"><code class="language-yaml">draw:
    polygons:
        color: '#ff00ff'
</pre></code>
<pre class="no-margin"><code class="language-yaml">draw:
    polygons:
        color: hsl(180, 100%, 100%)
</pre></code>

### 2. Vector format

In this format RGB/RGBA values range from  0-1.

* Representing RGB: `[0.7, 0.7, 0.7]`
* Representing RGBA: `[1.0, 0.2, 0.3, 0.5]` 0.5 here represents 50% alpha

For example:
<pre class="no-margin"><code class="language-yaml">draw:
    polygons:
        color: [1.0, 0.2, 0.3, 0.5]
</pre></code>

### 3. As a function

For example:
<pre class="no-margin"><code class="language-yaml">draw:
    polygons:
        color: function() { return [$zoom, .5, .5]; }
</pre></code>

<div class='alert-message'>
The keyword $zoom is built into Tangram and matches the current zoom level of the map.
</div>

Let's try these examples out:

[section]

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

<div class='alert-message'>
All valid GeoJSON and TopoJSON files have a type member with the name "properties" - it's not something particular to the GeoJSON file we are using in this example. Mapbox Vector Tiles also have a "properties" member.
</div>

[section]

Oh no! Take a close look at the map - what's going on with all the repeated labels (zoom in closer if you can't see them)? This is where we go back to the magic sauce `generate_label_centroids: true` on line 5.

For each point that Tangram has generated at the centroid of each polygon, it has also created a `{"label_placement" : "yes"}` property. This is how we'll filter for just those points within our `_labelStyle` style. To do so we need something called a `filter` block - which we'll go into later. For now, just note the additional lines 33-34 that filter just the points at the centroid of each polygon.

<div class='alert-message'>
If the feature in question is a multipolygon, the centroid point will be added to the largest polygon in the group.
</div>

[section]

## Customizing Text

Tangram is powerful because it let's you customize the drawing style of your layers to suit your needs. There are many more parameters you can use to customize your labels. Take a look at a few below:
