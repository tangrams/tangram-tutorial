### Data interpretation and styling

So how will we be using the data we just imported? Let's start by unpacking what we've written in the `layers` block. Vector tiles typically contain top-level structures which can be thought of as “layers” – inside a GeoJSON file, these would be the FeatureCollection objects. Inside a Tangram scene file, the layers object allows you to split the data by layer, by matching against the layer name.
