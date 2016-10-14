## Sublayers

Sublayer is a feature that we haven't spoken about in previous sections, but becomes especially useful when using the Mapzen Vector Tile service. Recall that we need at least one layer and some styling rules to create a minimum map. We've been declaring layers like so (`_countryLayer` is our layer name):

<pre><code class="language-yaml">layers:
    &#95;countryLayer:
        data:
            source: &#95;mapzen
            layer: countries
        draw:
            &#95;countryStyle:
                style: polygons
                color: darkgreen
</pre></code>

In reality Tangram allows you to declare any number of sublayers below `_countryLayer`.

<pre><code class="language-yaml">layers:
    &#95;roadsLayer:
        data:
            source: &#95;mapzen
            layer: roads
        draw: ...
        filter: ...
        &#95;sublayer1:
            draw: ...
            filter: ...
        &#95;sublayer2:
            draw: ...
            filter: ...
            &#95;subsublayer:
                draw: ...
                filter: ...
</pre></code>

The only parameter you do not need to include in a sublayer is the `data` block. This is unnecessary, because the the data in the parent layer (in the example above `_roadsLayer`) applies to the sublayers.

With that in mind, let's add a sublayer to specifically color the roads with a kind property of `highway` in a different color:

[section]
{ "type": "tangram", "src": "vector8.yaml", "lines": "53-54,57-58", "location": "14/40.7180/-74.0020" }
[section]
