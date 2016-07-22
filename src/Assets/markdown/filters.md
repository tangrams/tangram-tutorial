## Data filters

Great, so we have a map that displays all the countries in the world. We can add some data filters and more styling rules to make the map more interesting. To do this, we'll add a `filter` block to our `layer`. Each feature in a `layer` is first tested against each top-level `filter`, and if the feature’s data matches the filter, that feature will be assigned any associated draw styles. 
