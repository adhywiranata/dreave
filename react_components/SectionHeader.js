var React = require('react');
var ReactDOM = require('react-dom');

var SectionHeader = React.createClass({
  render: function() {
    console.log("Rendering LifeNotesHeader");
    return (
      <h2 className="ui header p-20">
        <img src="../../public/images/photos/patrick.png" className="ui circular image" />
        <div className="content">
          Set Your Life Goals :)
          <div className="sub header">Find what others are talking about</div>
        </div>
      </h2>
    )
  }
});

module.exports = SectionHeader;
