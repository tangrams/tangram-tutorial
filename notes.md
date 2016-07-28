### Boundaries and Barriers

This layer includes all of those things you would expect to be boundaries as well as a few other goodies: OpenStreetMap administrative boundaries (national borders, provinces, regions, municipalities, cities), Natural Earth boundaries (such as maritime boundaries), and even a few details at high zoom levels like the fence lines around some petting zoos. They keywords you should remember for this layer are:

* Layer name: `boundaries`
* Geometry types: `lines`

[section]

-What is included in the vector tiles? How to explain difference with Mapbox?
* Renamed many things from OSM. Based off of.
* POI: minutely feed - tile build queue. Hours/Days. Check Rob with most current up to date.

### To do:

-Add zoom level and coordinates to all examples
-Why does the geometry masking section not work? https://mapzen.com/documentation/tangram/Raster-Overview/
-Explain what happens when you add label points to 'places'
-For places layer clarify if `points` means you can add `text`
-Make POI lables demo: https://github.com/tangrams/poi-labels-demo

### Feedback from lily's session
Intro
-Clarify throughout that at the end we build up to something bigger.
-highlight geojson file text - lines - to show what is relevant

UI:
-next elements.
-an intro landing page
-scroll back to top on next page.
-change yellow?
-RESTART button for each tutorial.
-Add an indicator to the map UI for where you are.
-Add excersizes at the end!!!

BASIC MAP

Minimum map:
-First example, clarify which lines to uncomment!!!!
-clarify whether sources clash.

min:layers
-clarify what a geojson is
-clarify not to worry too much about what’s in this geojson file… alphabetical? not all alphabetical?
-clarify that you don’t HAVE to know about geojson to follow the tutorial.
- say what string you need to replace for ALL commands —> because ppl don’t know what to replace where
-clarify why multi polygon and lines wording works or not. (multi polygon geojson stuff).

STYLING

styling wth lines
-explain difference between meters and pixels —> not clear
-explain logic of meters and pixels - not clear

Layer order
-Clarify that we’ll get into best practices about layer order later in the tutorial!!

Labels
-CLARIFY: not to focus on country names and labels - just using test file

-CLARIFY: we’ll get to a better way of displaying labels soon - this section is meant to show how to use different sections. Don’t focus on the data, but the grammar and the bits you learn.

Customizing text
-align text is not so obvious
-area in square kilometers: clarify the distortion.

VECTOR TILES
what are vector tiles?
-Clarify that the way you get vector tiles is with the source GEOJSON
