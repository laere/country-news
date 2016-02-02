var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var CreateHistory = require('history/lib/createHashHistory');

var History = new CreateHistory({
    queryKey: false
});

var Header = require('./components/Header.jsx');
var News = require('./components/News.jsx');
var Photos = require('./components/Photos.jsx');

var Routes = (

    <Router history={History}>
        <Route path="/" component={Header}>
            <Route path="/News" component={News}/>
            <Route path="/Photos" component={Photos}/>
        </Route>
    </Router>
);

module.exports = Routes;
