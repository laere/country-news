var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/Header.jsx');
var News = require('./components/News.jsx');

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<News />, document.getElementById('content'));
