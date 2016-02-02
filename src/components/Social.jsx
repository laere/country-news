var React = require('react');

var Social = React.createClass({

    render: function() {

        return (

            <div>
              <img className="social-icon" src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/4-128.png" alt="Twitter" />
              <img className="social-icon" src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/3-128.png" alt="Facebook" />
              <img className="social-icon" src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/9-128.png" alt="LinkedIn" />
              <img className="social-icon" src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/5-128.png" alt="Instagram" />
            </div>
        );

    }

});

module.exports = Social;
