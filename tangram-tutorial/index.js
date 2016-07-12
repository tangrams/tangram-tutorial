// require("./Assets/style.scss")
// require("./Assets/bootstrap.css")
//
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import App from './App.react';
//
// ReactDOM.render(<App/>, document.getElementById('workspace'))
//
// hljs.initHighlightingOnLoad();

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './app/Components/routes'

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)

// hljs.initHighlightingOnLoad();
