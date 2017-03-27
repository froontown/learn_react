var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    return (
    	React.createElement("ul", null,
        	React.createElement("li", null, "ReactJS"),
            React.createElement("li", null, "JSX"),
            React.createElement("li", null,
            	React.createElement("input", {type: "text"}),
                React.createElement("button", null, "Add")
            )
        )
    );
  }
});

