let React = require('react');

var HelloWorld = React.createClass({
  render: function () {
    return <h1>Hello World from Learning ReactJS</h1>;
  }
});

ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.getElementById('root')
);
