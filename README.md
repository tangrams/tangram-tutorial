# Tangram Tutorial

This tutorial exposes a complete beginner to the basics of Tangram using an embedded version of Tangram Play.

To view online go to: [Tangram Tutorial](https://tangrams.github.io/tangram-tutorial/)

## Adding tutorial sections

### Steps

1. Create a markdown file with the section content and place it in `src/Assets/markdown/`, following writing rules as specified in the 'markdown specifications' section of this readme.

2. Place any yaml scene files you wish to use for an embedded Tangram Play within `src/Assets/tutorial-files/`.

3. Go to `src/Components/content.js` and add the section details to the `content` variable. The order of the array represents the order in which the tutorial pages will render. For example:

```
let content = [
    {
        title: 'Introduction',
        sections: [
            { path: '/intro', markdown: 'intro.md', name: 'Introduction' }
        ]
    },
    {
        title: 'A Basic Map',
        sections: [
            { path: '/minimum-map/min', markdown: 'min1.md', name: 'A Basic Map'},
            { path: '/minimum-map/data', markdown: 'min2.md', name: 'Layers and Data Import'}
        ]
    },
    ...
]
```

`title` will be the main title for the section sidebar. Each entry within `sections` corresponds to an individual page for which `path` is the url for the page, `markdown` represents the markdown file containing the section content, and `name` will be the name for the section on the sidebar.

That's it!

### Markdown specifications

All of the content in the tutorial is being generated from markdown. To do so, we've implemented a few different ways to add objects and content. In the background, some of the markdown will get converted into HTML and some of it will get converted into JSX to be rendered by the react component `Tutorial.jsx`.

#### Images

Images can be added using the following convention (note there are no line breaks, its important!):

```
[section]
{ "type": "image", "width": "60%", "src": "min.png" }
[section]
```

`type`, `width`, and `src` are all required properties. The `src` property should just point to an image within the `src/Assets/images/` folder. In the background, some JSX will eventually be generated for images.

#### Embedding Tangram Play

Tangram Play iframes can be added using the following convention (note there are no line breaks, its important!):

```
[section]
{ "type": "tangram", "src": "vector5.yaml", "lines": "34-42", "location": "14/40.7180/-74.0020" }
[section]
```

`type` and `src` are required properties. `lines` and `location` (zoom/lat/lng) are optional. The `src` property should just point to a yaml file within the `src/Assets/tutorial-files/` folder. In the background, some JSX will eventually be generated for these iframes.

#### Links

There are two types of links: those that are internal to the tutorial and those that are external.

External links can be added using traditional markdown: `[YAML](https://en.wikipedia.org/wiki/YAML)`

Internal links should be added using `a` tags: `<a href="/#/minimum-map/min">Layers and Data Import</a>`

#### Code blocks

Use plain html for code blocks:

```html
<pre><code class="language-yaml">
sources:
	mapzen
        type: GeoJSON
        url: https://tangrams.github.io/tangram-tutorial/tutorial-files/countries-data.geojson
</pre></code>
```

#### Callouts

Use plain html for callouts:

```html
<div class='alert alert-info'>
Blue call-outs like this contain information about the tutorial itself or mapping tidbits.
</div>
```

```html
<div class='alert alert-warning'>
Yellow call-outs like this are meant to draw your attention to an important idea or distinction you should keep in mind while writing Tangram code.
</div>
```

#### Special symbols

Within html blocks, remember that some symbols like `_` have to be written as `&#95;`.

## To run the repo locally

First install all the required packages `npm install`.

Then install gulp locally `npm install gulp`.

To start a local server on port 1080 run: `npm start`

Open the following url on your browser: `http://localhost:8080/`

Hot loading is enabled, meaning that any changes made in the code will appear on the page by just saving the file. No re-building necessary.

## To create a build version

To create a build version run: `npm run build`

This will place the proper assets in the `/docs` folder. This is where GitHub pages will read from.

Once you add the new build and push to the `master` branch on GitHub, the tutorial should be availble at the following url: [https://tangrams.github.io/tangram-tutorial/](https://tangrams.github.io/tangram-tutorial/)

## To test js and css linter rules

`npm test`

## Ideas to improve the tutorial

* Add a section on POIs
* Add exercises using the embedded version of Play
