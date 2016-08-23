## Layer Order

Let's talk about ordering our layers for styling. `order` is a parameter that sets the drawing order of the draw style. It is meant to be used in cases where layers cover the same pixel space, meaning that one layer will take precedence over another when they get drawn. You can use the `order` parameter to specify which higher-ordered layers should be drawn over lower-ordered layers. Try the exercise below:

[section]
{ "type": "tangram", "src": "styling2.yaml", "lines": "15,20" }
[section]
