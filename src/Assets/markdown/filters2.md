## Boolean Filters

Conveniently, we can also filter with three types of boolean filter functions `not`, `any`, and `all`. They are logically equivalent to logical operators in most programming languages: NOT (!=), OR (||), and AND (&&) respectively.

The `not` filter expects a single object as its input while `any` and `all` expect a list of filter objects.

<div class='alert alert-warning'>
Notice that we're using the '-' sign when working with `any` and `all`. It is not required for `not` because this filter only takes one object.
</div>

[section]
{ "type": "tangram", "src": "filters2.yaml", "lines": "21-28" }
[section]
