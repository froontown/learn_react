//FB.login(function(){
  // Note: The call will only work if you accept the permission request
//  FB.api('/me/feed', 'post', {message: 'Hello, world!'});
//}, {scope: 'publish_actions'});

function checkLoginStatusAndLoadUserLikes() {
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      loadUserAndLikes();
    } else {
      loginAndLoadUserLikes();
    }
  });
}

function loginAndLoadUserLikes() {
  FB.login(function(response) {
    loadUserAndLikes();
  }, {scope: 'user_likes'});
}
/*
function loadUserAndLikes() {
  FB.api('/me', function(userResponse) {
   console.log(1, userResponse);
  //});
  FB.api("/me/likes", function(likesResponse) {
      console.log('ok', likesResponse);
    });
  });
}
*/

var UserDetails = React.createClass({
  render: function () {
    return (
      <section id="user-details">
        <a href={this.props.userDetails.link} target="__blank">
          {this.props.userDetails.name}
        </a>
        {' | '}
        <a href="#" onClick={this.handleLogout}>Logout</a>
      </section>
    )
  },

  handleLogout: function () {
    FB.logout(function () {
      alert("You're logged out, refresh the page in order to login again.");
    });
  }
});

function loadUserAndLikes () {
  FB.api('/me', function (userResponse) {
    React.render(<UserDetails userDetails={userResponse} />, document.getElementById('user'));

    var fields = { fields: 'category,name,picture.type(normal)' };
    FB.api('/me/likes', fields, function (likesResponse) {
      React.render(<UserLikesList list={likesResponse.data} />, document.getElementById('main'));
    });
  });
}

var UserLikesList = React.createClass({
  render: function() {
    var items = this.props.list.map(function (likeObject) {
      return <UserLikeItem data={likeObject} />;
    });

    return (
      <ul id="user-likes-list">
        {items}
      </ul>
    );
  }
});
var UserLikeItem = React.createClass({
  getInitialState: function() {
    return {data_name: this.props.data.name};
  },
  handleClick: function(){
     this.setState({
	data_name: 'I liked it'})
	},

  render: function() {
    var props_data = this.props.data;

    return (
      <div onClick={this.handleClick}>
        <img src={props_data.picture.data.url} title={props_data.name} />

        <h1> Name:{this.state.data_name} </h1>
	<h2>Category <small>{props_data.category}</small></h2>
      </div>
    );
  }
});
