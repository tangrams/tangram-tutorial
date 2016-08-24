# Tangram Tutorial

This tutorial exposes a complete beginner to the basics of Tangram using an embedded version of Tangram Play.

To view online go to: [Tangram Tutorial](https://tangrams.github.io/tangram-tutorial/dist/#/)

## To run the repo locally

To start a local server on port 1080 run: `npm start`

Open the following url on your browser: `http://localhost:8080/#/`

Hot loading is enabled, meaning that any changes made in the code will appear on the page by just saving the file. No re-building necessary.

## To add a section to the tutorial

### Markdown specifications

All of the content in the tutorial is being generated from markdown. To do so, we've implemented a few different ways to add objects and content. In the background, some of the markdown will get converted into HTML and some of it will get converted into JSX to be rendered by the react component `Tutorial.jsx`.

#### Images

Images can be added using the following convention:

```
[section]
{ "type": "image", "width": "60%", "src": "min.png" }
[section]
```

`type`, `width`, and `src` are all required properties. The `src` property should just point to an image within the `/src/Assets/images/` folder. In the background, some JSX will eventually be generated for images.

#### Embedding Tangram Play

Tangram Play iframes can be added using the following convention:

```
[section]
{ "type": "tangram", "src": "vector5.yaml", "lines": "34-42", "location": "14/40.7180/-74.0020" }
[section]
```

`type` and `src` are required properties. `lines` and `location` (zoom/lat/lng) are optional. The `src` property should just point to a yaml file within the `/src/Assets/tutorial-files/` folder. In the background, some JSX will eventually be generated for these iframes.

#### Links

There are two types of links: those that are internal to the tutorial and those that are external.

External links can be added using traditional markdown: `[YAML](https://en.wikipedia.org/wiki/YAML)`

Internal links should be added using `a` tags: `<a href="/#/minimum-map/min">Layers and Data Import</a>`

#### Code blocks

Use plain html for code blocks:

```
<pre><code class="language-yaml">sources:
    mapzen:
        type: GeoJSON
        url: https://tangrams.github.io/tangram-tutorial/src/Assets/tutorial-files/countries-data.geojson
</pre></code>
```

#### Callouts

Use plain html for callouts:

```
<div class='alert alert-info'>
Blue call-outs like this contain information about the tutorial itself or mapping tidbits.
</div>
```

```
<div class='alert alert-warning'>
Yellow call-outs like this are meant to draw your attention to an important idea or distinction you should keep in mind while writing Tangram code.
</div>
```

#### Special symbols

Within html blocks, remember that some symbols like `_` have to be written as `&#95;`.

## To create a build version

To create a build version run: `npm run build`

This will place the proper assets in the `/dist` folder.

Once you add the new build and deploy to `gh-pages` branch on github, the tutorial should be availbe at the following url: [https://tangrams.github.io/tangram-tutorial/dist/#/](https://tangrams.github.io/tangram-tutorial/dist/#/)

## To test linter rules

`npm test`
