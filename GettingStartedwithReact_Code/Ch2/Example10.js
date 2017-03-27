var Header = React.createClass({
  render: function () {
    return (
      //this is the nav
      <nav>
        {/* this is the nav */}
        <h1>This is my awesome app</h1>
        {this.props.children}
      </nav>
    );
  }
});

