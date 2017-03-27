var HelloMessage = React.createClass({
  render: function () {
    return <h1>Hello {this.props.name}</h1>;
  }
});

var component = <HelloMessage />;
component.props.name = 'Testing';

React.render(component, document.body);

