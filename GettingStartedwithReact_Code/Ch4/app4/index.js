var EventBox = React.createClass({

  getInitialState:function(){
    return {e: 'On initial page load'}
  },

  update: function(e){
    this.setState({e: e.type})
  },

  render:function(){
    return (
      <div>
        <textarea
          onKeyDown={this.update}
          onKeyPress={this.update}
          onCopy={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
/>
        <h1>{this.state.e}</h1>
      </div>
    );
  }
});

ReactDOM.render(<EventBox />, document.getElementById('myTextarea'));
