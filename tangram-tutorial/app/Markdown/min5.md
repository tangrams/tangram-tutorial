Tangram did not interpret the data correctly when using a `lines`, `text`, or `raster` style because the data is not encoded as any of these. As a consequence, the map renders nothing at all. On the other hand when we use `points` Tangram is rendering the vertices of each polygon in our 'country' layer.

<div class='alert-message'>
The TopoJSON and MVT (Mapbox Vector Tiles) are structured in a similar way to GeoJSON files, so these geometric properties still apply. Raster files are different and we will cover them later on in the tutorial. 
</div>
