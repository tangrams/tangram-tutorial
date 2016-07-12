require("./Assets/style.scss")
require("./Assets/bootstrap.css")

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.react';

ReactDOM.render(<App/>, document.getElementById('workspace'))

hljs.initHighlightingOnLoad();
