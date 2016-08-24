// As long as this array is in order, the next and before buttons will populate correctly
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
    {
        title: 'Styling',
        sections: [
            { path: '/styling/lines', markdown: 'styling1.md', name: 'Styling with Lines' },
            { path: '/styling/order', markdown: 'styling2.md', name: 'Layer Order' },
            { path: '/styling/colors', markdown: 'styling3.md', name: 'Colors' },
            { path: '/styling/labels', markdown: 'styling4.md', name: 'Text Labels'},
            { path: '/styling/text', markdown: 'styling5.md', name: 'Customizing Text'}
        ]
    },
    {
        title: 'Data Filters',
        sections: [
            { path: '/filters/features', markdown: 'filters1.md', name: 'Feature Filters'},
            { path: '/filters/booleans', markdown: 'filters2.md', name: 'Boolean Filters'},
            { path: '/filters/functions', markdown: 'filters3.md', name: 'Function Filters'}
        ]
    },
    {
        title: 'Layer Data & Vector Tiles',
        sections: [
            { path: '/tiles/vector', markdown: 'vector1.md', name: 'What are Vector Tiles?' },
            { path: '/tiles/landuse', markdown: 'vector2.md', name: 'Landuse Layer'},
            { path: '/tiles/buildings', markdown: 'vector3.md', name: 'Buildings Layer'},
            { path: '/tiles/roads', markdown: 'vector4.md', name: 'Roads Layer'},
            { path: '/tiles/sublayers', markdown: 'vector5.md', name: 'Sublayers'},
            { path: '/tiles/layerorder', markdown: 'vector6.md', name: 'Tip: Layer Order'},
            { path: '/tiles/shorthand', markdown: 'vector7.md', name: 'Tip: Syntax Shorthands'},
            { path: '/tiles/places', markdown: 'vector8.md', name: 'Labels and Places Layer'},
            { path: '/tiles/syntax', markdown: 'vector9.md', name: 'URL Syntax'}
        ]
    },
    {
        title: 'Raster Tiles',
        sections: [
            { path: '/tiles/raster', markdown: 'raster.md', name: 'Raster Tiles'}
        ]
    },
    {
        title: 'Conclusion',
        sections: [
            { path: '/conclusion', markdown: 'conclusion.md', name: 'Conclusion'}
        ]
    }
];


// Function to populate our content array with next and previous links
let populateLinks = function () {
    for (let i = 0; i < content.length; i++) {
        for (let j = 0; j < content[i].sections.length; j++) {
            /* NEXT LINKS */
            let next;

            // We are at the end of whole content array
            if ((j + 1) === content[i].sections.length && (i + 1) === content.length) {
                next = '';
            }
            // If we are at the end of a section
            else if ((j + 1) === content[i].sections.length) {
                next = content[(i + 1)].sections[0].path;
            }
            else {
                next = content[i].sections[(j + 1)].path;
            }

            content[i].sections[j].next = next;

            /* PREV LINKS */
            let prev;

            // Beginning of whole content array
            if (i === 0 && j === 0) {
                prev = '';
            }
            // Beginning of a section
            else if (j === 0) {
                let prevSec = content[(i - 1)].sections;
                prev = prevSec[prevSec.length - 1].path;
            }
            else {
                prev = content[i].sections[(j - 1)].path;
            }

            content[i].sections[j].prev = prev;
        }
    }
};

populateLinks();

export default content;
