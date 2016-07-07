var React = require('react');
var ReactDOM = require('react-dom');

var AddForm = React.createClass({
  render: function(){
    console.log("Rendering LifeNotesForm");
    return (
      <div className="ui form p-20 form-block">
        <form name="addNoteForm">
          <h3>Set a new note</h3>
          <div className="field">
            <label>Note Title</label>
            <input name="title" placeholder="e.g. My Life is Meaningful!" type="text" />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea rows="2" name="description"></textarea>
          </div>
          <button className="ui button" onClick={ this.handleSubmit }>Save</button>
        </form>
      </div>
    )
  },
  handleSubmit: function(e){
    e.preventDefault();
    console.log("add note form submitted");
    var form = document.forms.addNoteForm;
    this.props.addNote(
      {
        title: form.title.value,
        description: form.description.value
      }
    );
    // clear the form for the next input
    form.title.value        = "";
    form.description.value  = "";
  }
});

module.exports = AddForm;
