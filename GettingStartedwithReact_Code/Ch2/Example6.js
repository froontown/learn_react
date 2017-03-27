var Header = React.createClass({
  render: function () {
    return (
      <nav>
        <h1>This is my awesome app</h1>
        {this.props.children}
      </nav>
    );
  }
});

var Clock = React.createClass({
  render: function () {
    return <span>{new Date().toLocaleTimeString()}</span>;
  }
});

var ComponentThatHasHeader = React.createClass({
  render: function () {
    return(
      <Header>
        <h2>This is my another component</h2>
        <Clock />
      </Header>
    );
  }
});

React.render(<ComponentThatHasHeader />, document.body);
