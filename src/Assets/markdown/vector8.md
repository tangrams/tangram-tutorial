## Labels and Places Layer

Let's continue our exploration of a few more layers from the Mapzen Vector Tile service, including ways to display labels and other UI elements about places.

### Places Layer

The places layer includes information about populated places in the work - with information such as the population size, the name of a place, and the type of place it is. Similar to the other layers, this one includes a `kind` property that takes values such as: `country`, `continent`, `capital`, `farm`, `borough`, `neighborhood`, and `state`, to name a few. Keywords to remember are:

* Layer name: `places`
* Geometry types: `points`

The example below illustrates how to use the pattern we've been using to add place labels to our map. Try zooming in and out to see how the place names change:

[section]
{ "type": "tangram", "src": "vectorlabel.yaml", "lines": "51-63" }
[section]

<div class='alert alert-warning'>
Remember any geometry type of `polygons`, `lines`, or `points` could display a label `text` given the proper styling. In each of these cases, the label will try to find a 'feature.name' property in the data source of the geometry.
</div>

Notice that for high zoom levels (12+) in metropolitan areas (such as New York City) the map is completely overloaded by labels. Let's apply a bit of filtering to get rid of the clutter.

<div class='alert alert-info'>
Places with kind values of `continent` and `country` start at the lowest zoom levels (0-4). `state`, `province`, and `city` are added at zoom 4. `town` appears at zoom 8. A few more labels such as `borough`, `suburb`, `quarter`, `village`, `hamlet`, `locality`, `isolated_dwelling`, and `farm` appear at zooms 13+.
</div>
