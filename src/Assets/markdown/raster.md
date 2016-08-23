## Raster Tiles

If you've understood that vector tiles are just squares of math that contain the geometry for a particular part of the earth, then raster tiles will be simpler to get.

[section]
{ "type": "tangram", "src": "raster.yaml", "lines": "3-4" }
[section]

But try zooming into the map and see what happens. Do you notice that the map fades to black? Why is that? What can happen with some raster tiles is that they've only been defined to work up to certain zoom level. We suggest adding a `max_zoom` parameter to the `sources` block, which will set the highest zoom level which will be requested from the datasource.

In the following example, new data is only requested up to zoom level 8, which solves our problem because our raster data source has only been set up to zoom level 8. When you don't control the data source, you can simply find this out by trial and error.

[section]
{ "type": "tangram", "src": "raster2.yaml", "lines": "5" }
[section]

### Adding a tint

The raster style can take a `color` parameter, which will be multiplied by the raster’s color as a tint. This parameter’s value defaults to “white” and accepts all standard `color` values including JavaScript functions.

[section]
{ "type": "tangram", "src": "raster3.yaml", "lines": "13" }
[section]
