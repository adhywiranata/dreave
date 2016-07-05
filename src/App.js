var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

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

var NoteRow = React.createClass({
  render: function(){
    console.log("Rendering Note:", this.props.note);
    return (
      <div className="card">
        <div className="content">
          <div className="header">{ this.props.note.title }</div>
          <div className="meta">2 days ago</div>
          <div className="description">
            <p>{ this.props.note.description }</p>
          </div>
        </div>
        <div className="extra content">
          <i className="eye icon"></i>
          121 Reads
        </div>
      </div>
    )
  }
});

var NotesList = React.createClass({
  render: function(){
    console.log("Rendering NotesList, num of notes: ", this.props.notes.length);
    var noteRows = this.props.notes.map(function(note) {
      return <NoteRow key={note._id} note={note} />
    });
    return (
      <div className="ui cards three column stackable m-t-50">
        {noteRows}
      </div>
    )
  }
});

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
        <NotesList notes={this.state.notes} />
      </div>
    )
  },
  componentDidMount: function(){
    $.ajax({
      url: '/api/notes',
      dataType: 'json',
      cache: false,
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

var mountNode = document.getElementById('section-life-notes');

ReactDOM.render(
  <LifeNotes />,
  mountNode
);
