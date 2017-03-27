var Component1 =

React.createClass({

  getInitialState:function(){

    return {

      name: 'hi',

      id: 1
    };

  },

  update: function(e){

    this.setState({name: e.target.value});

  },

  render:function(){

    return (

      <div>

        < Component2 name={this.state.name} update={this.update} />


        
      </div>

      );



  }

});



var Component2 = React.createClass({

  render:function(){

    return (

      <div>

        <input type="text" onChange={this.props.update} />

        <br />

        <b>{this.props.name}</b>

      </div>

      );



  }

});

ReactDOM.render(< Component1 name="this is the text property"  />, document.getElementById('myApp'));

