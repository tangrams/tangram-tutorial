## Raster Tiles

If you've understood that vector tiles are just squares of math that contain the geometry for a particular part of the earth, then raster tiles will be simpler to get.

[section]

But try zooming into the map and see what happens. Do you notice that the map fades to black? Why is that?

What can happen with some raster tiles is that they've only been defined to work until a certain zoom level. We suggest adding a `max_zoom` parameter to the `sources` block, which will set the highest zoom level which will be requested from the datasource.

In the following example, new data is only requested up to zoom level 10, which solves our problem because our raster data source has only been set up to zoom level 5. When you don't control the data source, you can simply find this out by trial and error.
