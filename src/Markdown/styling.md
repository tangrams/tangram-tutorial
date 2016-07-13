## A few more styling rules

Let's talk about styling with `lines` by adding country borders. Since our geojson represents each country as a polygon or multipolygon, we know that there are edges (or lines) in between each vertex (or point). We can use the `lines` style to draw these borders. And since we're using the same layer of data ('countries'), we can simply declare a new style under the `draw` block.
