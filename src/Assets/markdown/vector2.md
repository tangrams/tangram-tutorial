## Vector Tile Layers

As we've already explored, the Mapzen Vector Tile service conveniently includes data about the world in the form of data layers. In the previous section we built a map with two of these layers: `earth` and `water`. What are the rest? The service includes a total of 9 layers: `boundaries`, `buildings`, `landuse`, `places`, `pois`, `roads`, `transit`, `earth`, and `water`. Let's work on building up our previous map example to see how we can use and combine more layers.

As a reminder this is what our code looked like in the last section, where we were using the `earth` and `water` layers:

<pre><code class="language-yaml">
sources:
    &#95;mapzen:
        type: TopoJSON
        url: https://vector.mapzen.com/osm/all/{z}/{x}/{y}.topojson

layers:
    &#95;earthLayer:
        data:
            source: &#95;mapzen
            layer: earth
        draw:
            polygons:
                order: 0
                color: '#ddeeee'
    &#95;waterLayer:
        data:
            source: &#95;mapzen
            layer: water
        draw:
            polygons:
                order: 1
                color: '#88bbee'
</pre></code>

### Landuse layer

Let's try adding a `landuse` layer to our code. This layer is used to describe the primary use of land by humans. In Tangram the layer captures areas like: parks, forests, residential areas, commercial areas, industrial areas, universities, sports centers, hospitals, zoos, among others.

The keywords to remember for this layer are:

* Layer name: `landuse`
* Geometry types: `points` and `polygons`

<div class='alert alert-warning'>
For each layer, we will provide a 'layer name' and 'geometry types'. Recall that the layer name is what we have been using as `layer: countries` and `layer: earth` in some of the previous examples. It's the way we tell Tangram what data source to use for a particular drawing style within a `layer` block.
<br><br>
We've also been using a few different geometry types in previous examples: `lines`, `polygons`, and `text`. Remember when we styled the <a href="/#/minimum-map/data">countries</a> we used `style: polygons`, when we styled our country <a href="/#/styling/lines">border</a> we used `style: lines` and for <a href="/#/styling/labels">labels</a> we used `style: text`.
</div>

For this next example, try zooming in on the map to see the green areas representing `landuse`.

[section]
{ "type": "tangram", "src": "vector3.yaml", "lines": "25-33", "location": "6/39.130/-118.224" }
[section]

In this map we're coloring in light green all the polygons captured in the `landuse` layer. What if we only want to display some types of landuse areas and not all of them? That's where we can go back to our data `filter` blocks.

The `landuse` layer comes with a property called `kind` that let's us specify different types of `landuse` values. Take a look at this next example to see how you can use a `filter` block to filter by kind. For a full list of `kind` values check out: [https://mapzen.com/documentation/vector-tiles/layers/#landuse](https://mapzen.com/documentation/vector-tiles/layers/#landuse).

<div class='alert alert-warning'>
Each layer has specific properties like `kind` that are useful for different purposes. We'll be mentioning a few properties for each layer in this tutorial, but a full list of properties per layer are avilable on the mapzen docs: [https://mapzen.com/documentation/vector-tiles/layers/](https://mapzen.com/documentation/vector-tiles/layers/).
</div>

[section]
{ "type": "tangram", "src": "vector4.yaml", "lines": "34-39", "location": "13/40.8125/-73.9282" }
[section]

We've used the `draw: polygons` geometry because we're drawing the actual areas of landuse. The `points` geometry will be useful later ahead when we draw labels.

One last point about the `landuse` layer: notice that if you zoom out at some point the green polygons become unnoticeable. Tangram is doing some work behind the scenes to decide what appropriate features to display at different zoom levels.

<div class='alert alert-info'>
In terms of the specific data Tangram is sourcing, the `landuse` layer includes OpenStreetMap data at higher zoom levels, and Natural Earth data at lower zoom levels.
</div>
