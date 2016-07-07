var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var SectionHeader = require('./SectionHeader');
var AddForm       = require('./AddForm');
var FilterForm    = require('./FilterForm');
var NotesList     = require('./NotesList');

var LifeNotes = React.createClass({
  getInitialState: function(){
    return {
      notes: []
    };
  },
  render: function(){
    console.log("Rendering LifeNotes");
    return (
      <div>
        <SectionHeader />
        <AddForm addNote={this.addNote} />
        <FilterForm changeHandler={this.loadData} initFilter={this.props.location.query}/>
        <NotesList notes={this.state.notes} />
      </div>
    )
  },
  componentDidMount: function(){
    this.loadData({});
  },
  loadData: function(filter){
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
  },
  addNote: function(note){
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
  },
  updateNote: function(){

  },
  deleteNote: function(){

  }
});

module.exports = LifeNotes;
