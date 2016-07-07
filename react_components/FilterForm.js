var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  getInitialState: function(){
    var initFilter = this.props.initFilter;
    console.log("INITFILTER: ", initFilter.title);
    return {title: initFilter.title};
  },
  onChangeTitle: function(e){
    console.log("Filter Notes by Title: ", e.target.value);
    this.setState({title: e.target.value});
    this.props.changeHandler({title: e.target.value});
  },
  render: function(){
    console.log("Rendering LifeNotesFilterForm");
    return (
      <div className="ui form p-t-20">
        <form name="filterNoteForm">
          <div className="field">
            <label></label>
            <input name="title" placeholder="Search for notes" type="text" onChange={this.onChangeTitle}/>
          </div>
        </form>
      </div>
    )
  }
});
