var UserInfo = React.createClass({
  render: function () {
    return (
      <section id="user-section">
        <h2>{this.props.firstName} {this.props.lastName}</h2>
        <h3>{this.props.cityName} / {this.props.stateName}</h3>
      </section>
    );
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>My Awesome app!</h1>
        <UserInfo firstName={this.props.firstName}
                  lastName={this.props.lastName}
                  cityName={this.props.cityName}
                  stateName={this.props.stateName} />
      </div>
    );
  }
});

React.render(<App firstName="Learning"
                  lastName="ReactJS"
                  cityName="Florianopolis"
                  stateName="Santa Catarina" />, document.body);
