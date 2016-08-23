## Naming shortcuts to make your life easier

Tangram provides a few syntax short cuts that can save you time and make your code clearer. Let's look at two of these.

### Syntax shorthand #1: Layer names

Remember how we have been declaring layers so far? We've used the `layer` parameter to specify what layer within the data source to apply a particular style to.

<pre><code class="language-yaml">layers:
    &#95;earthLayer:
        data:
            source: &#95;mapzen
            layer: earth
</pre></code>

If no `layer` parameter is specified, Tangram will try to match the layer within the data source to the "layer name". The next example clarifies how the short hand works:

[section]
{ "type": "tangram", "src": "shorthand.yaml" }
[section]

### Syntax shorthand #2: Geometry styles

Recall how we've been declaring our geometry styles:

<pre><code class="language-yaml">layers:
    &#95;earthLayer:
        data:
            ...
        draw:
            &#95;earthStyle:
                style: polygons
                color: darkgreen
</pre></code>

If no `style` parameter is specified, Tangram will try to apply the "style name" as the geometry of a given style. Look at the next example to see how this reduces our code:

[section]
{ "type": "tangram", "src": "shorthand2.yaml" }
[section]

### Putting it all together

Compare how much shorter and readable our code looks when we apply both tips:

[section]
{ "type": "tangram", "src": "shorthand3.yaml" }
[section]
