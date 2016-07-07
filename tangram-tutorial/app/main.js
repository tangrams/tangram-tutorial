require("./Assets/style.scss")
require("./Assets/bootstrap.css")

var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./App.js');

ReactDOM.render(<App/>, document.getElementById('workspace'))

hljs.initHighlightingOnLoad();
