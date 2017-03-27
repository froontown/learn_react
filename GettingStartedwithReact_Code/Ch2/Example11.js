var StyledComponent = React.createClass({
  render: function () {
    return (
      <div style={{height: 50, width: 50, backgroundColor: 'red'}}>
        I have style!
      </div>
    );
  }
});

React.render(<StyledComponent />, document.body);
