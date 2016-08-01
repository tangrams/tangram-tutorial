import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history';

import Main from './Components/Main.react';
import Tutorial1 from './Components/Tutorial/Tutorial1Intro.react';
import { Tutorial21, Tutorial22 }  from './Components/Tutorial/Tutorial2Min.react';
import { Tutorial31, Tutorial32, Tutorial33, Tutorial34, Tutorial35 }  from './Components/Tutorial/Tutorial3Styling.react';
import { Tutorial41, Tutorial42, Tutorial43 } from './Components/Tutorial/Tutorial4Filters.react';
import { Tutorial51, Tutorial52, Tutorial53, Tutorial54, Tutorial55, Tutorial56, Tutorial57, Tutorial58, Tutorial59 } from './Components/Tutorial/Tutorial5Vector.react';
import { Tutorial61 } from './Components/Tutorial/Tutorial6Raster.react';
import TutorialConclusion from './Components/Tutorial/TutorialConclusion.react';

// Gets rid of hash extra symbols
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

//As long as this array is in order, the next and before buttons will populate correctly
let content = [
    {
        title: 'Introduction',
        sections: [
            { path: '/intro', component: Tutorial1, name: 'Introduction' }
        ]
    },
    {
        title: 'A Basic Map',
        sections: [
            { path: '/minimum-map/min', component: Tutorial21, name: 'A Basic Map'},
            { path: '/minimum-map/data', component: Tutorial22, name: 'Layers and Data Import'}
        ]
    },
    {
        title: 'Styling',
        sections: [
            { path: '/styling/lines', component: Tutorial31, name: 'Styling with Lines' },
            { path: '/styling/order', component: Tutorial32, name: 'Layer Order' },
            { path: '/styling/colors', component: Tutorial33, name: 'Colors' },
            { path: '/styling/labels', component: Tutorial34, name: 'Colors'},
            { path: '/styling/text', component: Tutorial35, name: 'Customizing Text'}
        ]
    },
    {
        title: 'Data Filters',
        sections: [
            { path: '/filters/features', component: Tutorial41, name: 'Feature Filters'},
            { path: '/filters/booleans', component: Tutorial42, name: 'Boolean Filters'},
            { path: '/filters/functions', component: Tutorial43, name: 'Function Filters'}
        ]
    },
    {
        title: 'Vector Tiles',
        sections: [
            { path: '/tiles/vector', component: Tutorial51, name: 'What are Vector Tiles?' },
            { path: '/tiles/landuse', component: Tutorial52, name: 'Landuse Layer'},
            { path: '/tiles/buildings', component: Tutorial53, name: 'Buildings Layer'},
            { path: '/tiles/roads', component: Tutorial54, name: 'Roads Layer'},
            { path: '/tiles/sublayers', component: Tutorial55, name: 'Sublayers'},
            { path: '/tiles/layerorder', component: Tutorial56, name: 'Tip: Layer Order'},
            { path: '/tiles/shorthand', component: Tutorial57, name: 'Tip: Syntax Shorthands'},
            { path: '/tiles/places', component: Tutorial58, name: 'Labels and Places Layer'},
            { path: '/tiles/syntax', component: Tutorial59, name: 'URL Syntax'}
        ]
    },
    {
        title: 'Raster Tiles',
        sections: [
            { path: '/tiles/raster', component: Tutorial61, name: 'Raster Tiles'}
        ]
    },
    {
        title: 'Conclusion',
        sections: [
            { path: '/conclusion', component: TutorialConclusion, name: 'Conclusion'}
        ]
    }
];

export default content;

let routes = (
    <Router onUpdate={() => scrollToTop() } history={appHistory}>
        <Route path="/" component={Main}>
            {
                // Iterating through each main section
                content.map(function(c) {
                    // Iterating through each main section
                    return c.sections.map(function(s, i) {
                        return <Route key={i} path={s.path} component={s.component} />
                    })
                })
            }


        </Route>
    </Router>
);

// Scrolls inner content div to top when clicking route link
let scrollToTop = function () {
    let x = document.getElementsByClassName('content-child')[0];
    x.scrollTop = 0;
}

ReactDOM.render(
    routes,
    document.getElementById('app')
);
