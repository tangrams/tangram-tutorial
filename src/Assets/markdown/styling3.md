## Colors

Tangram gives you complete control over how you might choose to color a scene. With that in mind, we support a variety of color formats such as:

### 1. CSS colors

A variety of CSS color formats are available, as specified in the [W3C’s Cascading Style Sheets specification](http://www.w3schools.com/cssref/css_colors_legal.asp). None of this is specific to Tangram, they are color formats available to all CSS stylesheets.

* named colors: `red`, `blue`, `salmon`, `rebeccapurple`
* hex colors: `'#fff'`, `'000'`, `'#9CE6E5'`
* RGB colors: `rgb(255, 190, 0)`
* RGBA colors: `rgb(255, 190, 0, .5)`
* HSL colors: `hsl(180, 100%, 100%)`
* HSLA colors: `hsla(180, 100%, 100%, 50%)`

For example:
<pre><code class="language-yaml">draw:
    polygons:
        color: '#ff00ff'
</pre></code>
<pre><code class="language-yaml">draw:
    polygons:
        color: hsl(180, 100%, 100%)
</pre></code>

### 2. Vector format

In this format RGB/RGBA values range from  0-1.

* Representing RGB: `[0.7, 0.7, 0.7]`
* Representing RGBA: `[1.0, 0.2, 0.3, 0.5]` 0.5 here represents 50% alpha

For example:
<pre><code class="language-yaml">draw:
    polygons:
        color: [1.0, 0.2, 0.3, 0.5]
</pre></code>

### 3. As a function

For example:
<pre><code class="language-yaml">draw:
    polygons:
        color: function() { return [$zoom, .5, .5]; }
</pre></code>

<div class='alert alert-warning'>
The keyword $zoom is built into Tangram and matches the current zoom level of the map.
</div>

Let's try these examples out:

[section]
{ "type": "tangram", "src": "colors.yaml", "lines": "14-19" }
[section]
