import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

import Main from './Components/Main';
import content from './Components/content';
import Tutorial from './Components/UI/Tutorial';

// Gets rid of hash extra symbols
const appHistory = useRouterHistory(createHashHistory)({
    queryKey: false
});

// Scrolls inner content div to top when clicking route link
let scrollToTop = function () {
    let x = document.getElementsByClassName('content-child')[0];
    x.scrollTop = 0;
};

let routes = (
    <Router history={appHistory} onUpdate={() => scrollToTop() }>
        <Route path='/' component={Main}>
            <IndexRoute component={() => <Tutorial markdown='home.md' next={content[0].sections[0].path} prev='' />} />
            {
                // Iterating through each main section
                content.map(function (c, i) {
                    // Iterating through each main section
                    let subsection = c.sections.map(function (s, j) {
                        return <Route key={i} path={s.path} component={() => <Tutorial markdown={s.markdown} next={s.next} prev={s.prev} />} />;
                    });
                    return subsection;
                })
            }
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
