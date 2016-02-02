var React = require('react');
var ProfileIcon = require('./ProfileIcon.jsx')

var Article = React.createClass({

    render: function() {

      return (
          <article>
            <section>
              <ProfileIcon />
              <h2>Kittens!</h2>
              <span>The <strong>cutest</strong> cats around...</span>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <img className="article-img" src="https://imgflip.com/s/meme/Cute-Cat.jpg" />
              <img className="article-img" src="https://pbs.twimg.com/profile_images/567285191169687553/7kg_TF4l.jpeg" />
            </section>
          </article>
      );

    }

});

module.exports = Article;
