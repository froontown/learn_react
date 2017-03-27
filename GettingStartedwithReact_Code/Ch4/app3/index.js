var FormComponent = React.createClass({
  getInitialState : function() {
    return {
      first_name : "michael",
      last_name : "jackson"
    };
  },
  handleClick : function() {
    this.replaceState({
      last_name : "jordan"
    });
  },
  render : function() {
    return <div onClick={this.handleClick} >
      Hi {this.state.first_name + " " + this.state.last_name  }
    </div>;
  }
});


ReactDOM.render(<FormComponent />, document.getElementById('main'));

