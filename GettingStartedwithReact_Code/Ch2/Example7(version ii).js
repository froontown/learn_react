var App = React.createClass({
  render: function () {
    var loginPane;
    if (isUserLoggedIn) {
      loginPane = <UserDetails />
    } else {
      loginPane = <LoginButton />
    }
    
    return (
      <nav>
        <Home />
        {loginPane}
      </nav>
    )
  }
});

React.render(<App />, document.body);
