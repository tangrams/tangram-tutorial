## URL syntax

Notice that our source URL looks a little different than the GeoJSON and TopoJSON we've been using so far. It's because we're linking directly to the Mapzen Vector Tile service, which provides vector tiles in a variety of formats. The following three sources are equivalent in the data that they provide; what's different is the encoding format of that data.

`https://tile.mapzen.com/mapzen/vector/v1/all/{z}/{x}/{y}.topojson` TopoJSON format

`https://tile.mapzen.com/mapzen/vector/v1/all/{z}/{x}/{y}.json` GeoJSON format

`https://tile.mapzen.com/mapzen/vector/v1/all/{z}/{x}/{y}.mvt` Mapbox Vector Tiles format

<div class='alert alert-info'>
We recommend TopoJSON format for desktop web development, and MVT format for native mobile development. The Mapzen server gzips tiles automatically, so the TopoJSON file format is comparable in file size to MVT over the wire, and it’s much friendlier to debug.
</div>

### Sourcing Individual Layers

In reality you can also replace the `all` in the url with any number of layers of your choice. Layer names filter the geometry that is delivered: buildings and roads and water are but a few examples. Multiple layer names can be combined in the URL, such as roads and water:

`https://tile.mapzen.com/mapzen/vector/v1/earth/{z}/{x}/{y}.topojson`

or

`https://tile.mapzen.com/mapzen/vector/v1/earth,water/{z}/{x}/{y}.topojson`

<br>
Importantly, though, if you only import one layer, you must leave out the `data: layer` filter. Otherwise you can apply the data filter as usual. Take a look at the two examples below:

[section]
{ "type": "tangram", "src": "url1.yaml", "lines": "4,8" }
[section]

[section]
{ "type": "tangram", "src": "url2.yaml", "lines": "4" }
[section]

### API keys

One last comment about URLs. We've been using a special app in this tutorial that let's us embed Tangram and scene file code in one single view. If you go on to deploy a Tangram scene file on your own, you will need an API key. API keys come in the pattern: `mapzen-xxxxxx` or `vector-tiles-xxxxxx` and can be obtained here: [https://mapzen.com/developers/sign_in](https://mapzen.com/developers/sign_in). A full URL pattern would look something like this, where you should replace `xxxxxx` with your particular API key:

`https://tile.mapzen.com/mapzen/vector/v1/all/{z}/{x}/{y}.topojson?api_key=mapzen-xxxxxx`

<div class='alert alert-info'>
If you're curious, here is what a single sample TopoJSON tile looks like: `https://tile.mapzen.com/mapzen/vector/v1/all/16/19293/24641.topojson?api_key=mapzen-xxxxxx`.
<br><br>
And here is a web map to help you interactively explore the Mapzen Vector Tile data: [http://tangrams.github.io/explorer](http://tangrams.github.io/explorer).
</div>
