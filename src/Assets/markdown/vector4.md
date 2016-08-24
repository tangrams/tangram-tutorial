## Roads and transportation layer

Let's work on one last layer before going into a section on Tangram tips.

The `roads` layer is super useful and provides exactly what you might imagine: highways, major roads, minor roads, paths, railways, ferries, and ski pistes. Keywords to remember here are:

* Layer name: `roads`
* Geometry types: `lines`

Look how easy it is to add roads to our map:

[section]
{ "type": "tangram", "src": "vector6.yaml", "lines": "43-53", "location": "14/40.7180/-74.0020" }
[section]

Again, this layer has a `kinds` property that lets you filter how to draw different types of roads. The `kinds` property for this layer can take on values of: `aerialway`, `exit`, `ferry`, `highway`, `major_road`, `minor_road`, `path`, `piste`, `racetrack`, or `rail`.

Let's add a `filter` block to see how this property might be useful for us. In this next example we'll only show `ferry` and `highway` roads:

[section]
{ "type": "tangram", "src": "vector7.yaml", "lines": "53-59", "location": "14/40.7180/-74.0020" }
[section]

<div class='alert alert-info'>
To improve performance, some road segments are merged at low and mid-zooms. To facilitate this, certain properties are dropped at those zooms. The exact zoom varies per feature class (major roads keep this properties over a wider range, minor roads drop them starting at zoom 14).
</div>

But now what if we wanted to color only the highways or only the ferry lines in a certain color? How do we do that in the current syntax? The answer is that you need to declare a sublayer - which is the topic of our next section.
