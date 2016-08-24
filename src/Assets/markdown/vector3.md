## Buildings layer

Let's keep adding layers! The next one we'll talk about is the `buildings` layer and here are the keywords to remember are:

* Layer name: `buildings`
* Geometry types: `points` and `polygons`

As the names suggests, this layer provides building footprint data (in the form of polygons) and addresses (in the form of points). The building data starts at zoom level 13 by including huge buildings, and progressively adding all buildings at zoom 16+. Address points are available at zoom 16+; they are suitable for display at zoom level 17 and higher.

Look at the next example to see just how easy it is to draw building data:

[section]
{ "type": "tangram", "src": "vector5.yaml", "lines": "34-42", "location": "14/40.7180/-74.0020" }
[section]
