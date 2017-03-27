var MyButton = React.createClass({
	getDefaultProps: function() {
          console.log('GetDefaultProps is invoked');
          return {id: 1};
	},
	getInitialState: function(){
	  return {value: 11}
	},
	addOnClick: function(){
	  this.setState({value: this.state.value +  2});
	},
	componentWillMount: function(){
	console.log('MyButton component is mounting');
	},
        render: function(){
          console.log("myButton React component is rendering");
          return ( <div>
	<button>{this.props.id}</button>
	<button onClick={this.addOnClick}>{this.state.value}</button>
	</div>);
        },
        componentDidMount: function(){
        console.log('MyButton component is mounted');
        },
//Updating lifecycle methods
	shouldComponentUpdate: function() {
	console.log('ShouldComponentUpdate');
	    return true;
	  },
	componentWillReceiveProps: function(nextProps) {
	    console.log('ComponentWillRecieveProps invoked');
	 },  
	componentWillUpdate: function() {
	    console.log('ComponentWillUpdate invoked');
	},  
	componentDidUpdate: function() {
	    console.log('ComponentDidUpdate invoked');
	},
//Unmounting Lifecycle Methods
	componentWillUnmount: function(){
	console.log('Umounting MyButton component');
	}

});

var ComponentApp = React.createClass({
	mount: function(){
	  ReactDOM.render(<MyButton />, document.getElementById('myApp'));
	},
        unmount: function(){
          ReactDOM.unmountComponentAtNode(document.getElementById('myApp'));
        },
	render: function(){
	  return (
		<div>
		<button onClick={this.mount}>Mount</button>
		<button onClick={this.unmount}>Unmount</button>
		<div id="myApp"></div>
		</div>
	  );
	}
});

ReactDOM.render(<ComponentApp />, document.getElementById('app'));
