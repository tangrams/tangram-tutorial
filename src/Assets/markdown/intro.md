## How do we style a map?

### Tangram scene files
Tangram maps are styled using a custom styling syntax inside of a <strong>scene file</strong>. The scene file is a YAML document which organizes all of the elements Tangram uses to draw a map. This file describes a hierarchy of objects which control every aspect of your map, including data sources, feature layers, lights, cameras, textures, and more.

Why YAML? Well, YAML is a data format similar in many ways to JSON, but it has some unique features which we thought made it more friendly and easy to use for our purposes. A Tangram YAML scene file looks something like this (don't worry about understanding the contents of this file right now):

<pre><code class="language-yaml">sources:
    &#95;mapzen:
        type: GeoJSON
        url: https://tangrams.github.io/tangram-tutorial/src/Assets/tutorial-files/countries-data.geojson
layers:
    &#95;countryLayer:
        data:
            source: &#95;mapzen
            layer: countries
        draw:
            &#95;countryStyle:
                style: polygons
                color: darkgreen
</pre></code>

And produces a map like this:

[section]

A scene file like this is all it takes to build a map using Tangram. In the next section we'll explore what each of these lines do and how to customize the map it renders.

### Prior knowledge required for this tutorial:

You certainly don't have to be a programmer or cartography expert to follow this tutorial. Nevertheless, familiarity with JSON, CSS and basic programming concepts will help. Familiarity with GeoJSON and Javascript will help even more.

### Goals for this tutorial:
In this tutorial, you will become familiar with the syntax, rules, and capabilities of the Tangram rendering engine, meaning you'll be able to write valid YAML documents that contain the rules required to style 2D and 3D maps.

Don't worry too much about understanding every aspect of every example. We'll build your knowledge of Tangram slowly, so as you move through the sections more parts of the syntax will become familiar and understandable.

<div class='alert-message'>
Yellow call-outs like this are meant to draw your attention to an important idea or distinction you should keep in mind.
</div>
