var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/Header.jsx');
var News = require('./components/News.jsx');
var Routes = require('./Routes.jsx');

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<News />, document.getElementById('content'));
ReactDOM.render(Routes, document.getElementById('nav'));
