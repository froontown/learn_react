var ClassedComponent = React.createClass({
  render: function ()   {
    var className = 'initial-class';
    if (this.props.isUrgent) {
      className += ' urgent';
    }

    return (
      <div className={className}>
        I have class!
      </div>
    );
  }
});

React.render(<ClassedComponent isUrgent={true} />, document.body);

