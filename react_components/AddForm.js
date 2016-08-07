import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class AddForm extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(){
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
  }

  handleSubmit(e){
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
}

export default AddForm;
