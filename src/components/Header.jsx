var React = require('react');
var Social = require('./Social.jsx');

var Header = React.createClass({

    render: function() {

        return (

            <div>
                <h1 className="header">Header!</h1>
                <span className="slogan">slogan here</span>
                <Social className="social" />
            </div>
        );
    }

});

module.exports = Header;
