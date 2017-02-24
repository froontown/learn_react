import React from 'react';
import ReactDOM from 'React-DOM';

var HelloWorld = React.createClass({
  render: function () {
    return React.createElement('h1', null, "Hello World from Learning ReactJS");
  }
});

ReactDOM.render(
  React.createlement(HelloWorld, null).
  document.getElementById('root')
);
