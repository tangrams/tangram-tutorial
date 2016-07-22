## Styling

Let's talk about styling with `lines` by adding country borders. Since our geojson represents each country as a polygon or multipolygon, we know that there are edges (or lines) in between each vertex (or point). We can use the `lines` style to draw these borders. And since we're using the same layer of data ('&#95;countryStyle'), we can simply declare a new style under the `draw` block.

[section]

## Order

Let's talk about ordering our layers for styling. `order` is a parameter that sets the drawing order of the draw style. It is meant to be used in cases where layers cover the same pixel space, meaning that one layer will take precedence over another when they get drawn. You can use the `order` parameter to specify which higher-ordered layers should be drawn over lower-ordered layers. Try the exercise below:

[section]

## Labels

Finally, let's introduce one more styling concept before we jump into data filters. Remember the `text` style that we spoke about in the "Layer and Data Import" section? 
