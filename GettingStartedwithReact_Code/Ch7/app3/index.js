var ValidationApp = React.createClass({
  propTypes: {
    name: function(props, propName,componentName){
      if(!(propName in props))  {
        throw new Error("Property Name Missing ")
      }
    var value = props[propName];
    if (typeof value === 'string') {
        return value.length <= 7 ? null : new Error(propName + ' in ' + componentName + " is longer than 7 characters");
    }
   }
  },
  render:function(){
    return <h1>{this.props.name}</h1>
  }
});

// ReactDOM.render(<ValidationApp />, document.getElementById('myReactContainer')); //missing prop name
ReactDOM.render(<ValidationApp name="123" />, document.getElementById('myReactContainer')); //prop not valid
//ReactDOM.render(<ValidationApp name='cool ReactJS' />, document.getElementById('myReactContainer')); //all good
