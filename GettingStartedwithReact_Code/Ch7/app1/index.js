var ReactMixin = {
  getInitialState:function(){
    return {count:0};
  },
  componentWillMount:function(){
    console.log('Component will mount!');
  },
  increaseCountBy10: function(){
    this.setState({count: this.state.count+10})
  }
}


var App = React.createClass({
  render:function(){
    return (
        <div>
          <Label txt="SetInterval increase by 10 in every 100ms" />
        </div>
      )
  }
});

var Button = React.createClass({
  mixins:[ReactMixin],
  render:function(){
    return <button onClick={this.increaseCountBy10}>{this.props.txt} : {this.state.count}</button>
  }
});

var Label = React.createClass({
  mixins:[ReactMixin],
  componentWillMount:function(){
//    setInterval(this.increaseCountBy10,100);
//  },
     interval = setInterval(this.increaseCountBy10,100);
   },
  componentWillUnMount:function(){
     clearInterval(this.interval);
   },
  render:function(){
    return <label>{this.props.txt} : {this.state.count}</label>
  }
});

ReactDOM.render(<App />, document.getElementById('myReactContainer'));

