var ReactMixin = {
     getDefaultProps: function () {
        return {text1: "I am from first mixin"};
    }
};



var ReactMixin2 = {
      getDefaultProps: function () {
        return {text2: "I am from second mixin"};
    }
};



var App = React.createClass({
  mixins:[ReactMixin, ReactMixin2],
  render: function () {
    return ( 
    <div> 
	<p>Mixin1: {this.props.text1} </p>
	<p>Mixin2: {this.props.text2}</p>
    </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('myReactContainer'));

