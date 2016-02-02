var React = require('react');
var Article = require('./Article.jsx');

var News = React.createClass({

  render: function() {

    return(
      <div>
          <h1>News</h1>
          <Article />
      </div>
    );

  }

});

module.exports = News;
