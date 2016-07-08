Let's unpack this example. First of all, note that our `sources` and `layers` blocks are required elements for all valid Tangram scene files. Try uncommenting them out with `#` to see what happens. You should see the map on the left go black.

#### Data sources

Let's talk about the `sources` block first. As the word indicates, this is the place where we define our data sources and tell the Tangram engine where to get its vector tiles from. The block takes only one type of parameter, a <strong>source name</strong>.

<pre><code class="language-yaml">sources:
    &#95;mapzen: # A source name
        type: GeoJSON
        url: https://tangrams.github.io/tangram-tutorial/tangram-tutorial-files/countries.geojson
</code></pre>

The source name is important because you will need to use it elsewhere in the Tangram scene file. Think of it as a variable name that you can refer to again and again throughout the scene file. The `sources` block can take any number of source names, and each of those can be named anyway you'd like.

<pre><code class="language-yaml">sources:
    &#95;stamen: # A source name
        type: Raster
        url: http://a.tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg
    &#95;mapzen: # Another source name
        type: GeoJSON
        url: https://tangrams.github.io/tangram-tutorial/tangram-tutorial-files/countries.geojson
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

#### Data interpretation and styling

So how will we be using the data we just imported? Let's start by unpacking what we've written in the `layers` block. Vector tiles typically contain top-level structures which can be thought of as “layers” – inside a GeoJSON file, these would be the FeatureCollection objects. Inside a Tangram scene file, the layers object allows you to split the data by layer, by matching against the layer name.
