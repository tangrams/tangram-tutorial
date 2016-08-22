import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import Main from './Components/Main.react';
import content from './Components/content';

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
            {
                // Iterating through each main section
                content.map(function (c, i) {
                    // Iterating through each main section
                    let subsection = c.sections.map(function (s, j) {
                        return <Route key={i} path={s.path} component={s.component} next={s.next} prev={s.prev}/>;
                    });
                    return subsection;
                })
            }
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
