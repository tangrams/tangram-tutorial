## Function Filters

Lastly, Tangram provides the ability to write functions in Javascript within filter blocks. This is useful for highly customized or more complex queries. The only detail to remember when writing functions is that Tangram provides a `feature` keyword for accessing properties. So to access the `continentName` property one would write `feature.continentName`.

Take a look at a few examples below and note that only one function will work within the `filter` block. To use more than one function you need to embed them within an `any` or `all` block.

[section]
{ "type": "tangram", "src": "filters3.yaml", "lines": "21-27" }
[section]
