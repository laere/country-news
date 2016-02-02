var React = require('react');
var Social = require('./Social.jsx');

var Header = React.createClass({

    render: function() {

        return (

            <div className="header">
                <h1>Country News</h1>
                {/*<span className="slogan">catch us <strong>every week</strong></span>*/}
                <Social className="social" />
                {this.props.children}
            </div>
        );
    }

});

module.exports = Header;
