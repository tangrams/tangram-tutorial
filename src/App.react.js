import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router'

import Main from './Components/Main.react';
import Tutorial1 from './Components/Tutorial/Tutorial1Intro.react';
import { Tutorial21, Tutorial22 }  from './Components/Tutorial/Tutorial2Min.react';
import { Tutorial31, Tutorial32, Tutorial33, Tutorial34, Tutorial35 }  from './Components/Tutorial/Tutorial3Styling.react';
import { Tutorial41, Tutorial42, Tutorial43 } from './Components/Tutorial/Tutorial4Filters.react';
import { Tutorial51, Tutorial52, Tutorial53, Tutorial54, Tutorial55, Tutorial56, Tutorial57 } from './Components/Tutorial/Tutorial5Vector.react';
import { Tutorial61 } from './Components/Tutorial/Tutorial6Raster.react';
import TutorialConclusion from './Components/Tutorial/TutorialConclusion.react';

let routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/intro" component={Tutorial1}/>
            <Route path="/minimum-map/min" component={Tutorial21}/>
            <Route path="/minimum-map/data" component={Tutorial22}/>
            <Route path="/styling/lines" component={Tutorial31}/>
            <Route path="/styling/order" component={Tutorial32}/>
            <Route path="/styling/colors" component={Tutorial33}/>
            <Route path="/styling/labels" component={Tutorial34}/>
            <Route path="/styling/text" component={Tutorial35}/>
            <Route path="/filters/features" component={Tutorial41}/>
            <Route path="/filters/booleans" component={Tutorial42}/>
            <Route path="/filters/functions" component={Tutorial43}/>
            <Route path="/tiles/vector" component={Tutorial51}/>
            <Route path="/tiles/landuse" component={Tutorial52}/>
            <Route path="/tiles/buildings" component={Tutorial53}/>
            <Route path="/tiles/roads" component={Tutorial54}/>
            <Route path="/tiles/sublayers" component={Tutorial55}/>
            <Route path="/tiles/layerorder" component={Tutorial56}/>
            <Route path="/tiles/syntax" component={Tutorial57}/>
            <Route path="/tiles/raster" component={Tutorial61}/>
            <Route path="/conclusion" component={TutorialConclusion}/>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
)
