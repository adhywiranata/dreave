import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';

import $ from 'jquery';

import SectionHeader from './SectionHeader';
import AddForm from './AddForm';
import FilterForm from './FilterForm';
import NotesList from './NotesList';

class LifeNotes extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: []
    };
    this.loadData = this.loadData.bind(this);
    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  render(){
    return (
      <div>
        <SectionHeader />
        <AddForm addNote={this.addNote} />
        <FilterForm changeHandler={this.loadData} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }

  loadData(filter){
    $.ajax({
      url: '/api/notes',
      dataType: 'json',
      cache: false,
      data: filter,
      success: function(data) {
        this.setState({notes: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  addNote(note){
    console.log("adding a new note: ", note);
    $.ajax({
      type: 'POST',
      url: '/api/notes',
      contentType: 'application/json',
      data: JSON.stringify(note),
      success: function(data) {
        var note = data;
        // We're advised not to modify the state, it's immutable. So, make a copy.
        var updatedNotes  = this.state.notes.push(note);
        console.log("updated notes list: ", updatedNotes);
        this.setState({ note: updatedNotes });
      }.bind(this),
      error: function(xhr, status, err) {
        // ideally, show error to user.
        console.log("Error adding note:", err);
      }
    });
  }

  updateNote(){

  }

  deleteNote(){

  }
}

export default LifeNotes;
