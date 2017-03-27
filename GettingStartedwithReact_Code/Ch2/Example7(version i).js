var loginPane;
if (IsUserLoggedIn) {
  loginPane = <UserDetails />
} else {
  loginPane = <LoginButton />
}

React.render(loginPane, document.getElementById('login-div'));

