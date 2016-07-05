console.log('test');

var LifeNotesHeader = React.createClass({
  displayName: "LifeNotesHeader",

  render: function () {
    console.log("Rendering LifeNotesHeader");
    return React.createElement(
      "h2",
      { "class": "ui header p-20" },
      React.createElement("img", { src: "../../assets/images/photos/patrick.png", "class": "ui circular image" }),
      React.createElement(
        "div",
        { "class": "content" },
        "Set Your Life Goals",
        React.createElement(
          "div",
          { "class": "sub header" },
          "Find what others are talking about"
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(LifeNotesHeader, null), document.getElementById('section-life-notes-dummy'));