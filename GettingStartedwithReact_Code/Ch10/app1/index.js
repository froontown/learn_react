var GithubUser = React.createClass({

  getInitialState: function() {

    return {

      username: '',

 	user_url: ''

    };

  },



  componentDidMount: function() {

    $.get(this.props.source, function(result) {

     console.log(result);
      var user = result;

      if (this.isMounted()) {

        this.setState({

          username: user.login,

          user_url: user.html_url

        });

      }

    }.bind(this));

  },



  render: function() {

    return (

      <div>

        {this.state.username}'s Github 

        <a href={this.state.user_url}> url </a>.

      </div>

    );

  }

});



ReactDOM.render(

  <GithubUser source="https://api.github.com/users/doel" />,

  document.getElementById('app')

);
