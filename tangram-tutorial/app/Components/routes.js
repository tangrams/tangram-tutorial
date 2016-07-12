import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Main from './Main.react';
import Tutorial1 from './Tutorial/Tutorial1Intro.react';
import { Tutorial21, Tutorial22 }  from './Tutorial/Tutorial2Min.react';
import Tutorial3 from './Tutorial/Tutorial3Styling.react';
import Tutorial4 from './Tutorial/Tutorial4Filters.react';
import TutorialConclusion from './Tutorial/TutorialConclusion.react';

module.exports = (
    <Route path="/" component={Main}>
        <Route path="/intro" component={Tutorial1}/>
        <Route path="/minimum-map/min" component={Tutorial21}/>
        <Route path="/minimum-map/data" component={Tutorial22}/>
        <Route path="/styling" component={Tutorial3}/>
        <Route path="/filters" component={Tutorial4}/>
        <Route path="/conclusion" component={TutorialConclusion}/>
    </Route>
)
