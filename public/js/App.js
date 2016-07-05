var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var SectionHeader = React.createClass({
  displayName: 'SectionHeader',

  render: function () {
    console.log("Rendering LifeNotesHeader");
    return React.createElement(
      'h2',
      { className: 'ui header p-20' },
      React.createElement('img', { src: '../../public/images/photos/patrick.png', className: 'ui circular image' }),
      React.createElement(
        'div',
        { className: 'content' },
        'Set Your Life Goals :)',
        React.createElement(
          'div',
          { className: 'sub header' },
          'Find what others are talking about'
        )
      )
    );
  }
});

var AddForm = React.createClass({
  displayName: 'AddForm',

  render: function () {
    console.log("Rendering LifeNotesForm");
    return React.createElement(
      'div',
      { className: 'ui form p-20 form-block' },
      React.createElement(
        'form',
        { name: 'addNoteForm' },
        React.createElement(
          'h3',
          null,
          'Set a new note'
        ),
        React.createElement(
          'div',
          { className: 'field' },
          React.createElement(
            'label',
            null,
            'Note Title'
          ),
          React.createElement('input', { name: 'title', placeholder: 'e.g. My Life is Meaningful!', type: 'text' })
        ),
        React.createElement(
          'div',
          { className: 'field' },
          React.createElement(
            'label',
            null,
            'Description'
          ),
          React.createElement('textarea', { rows: '2', name: 'description' })
        ),
        React.createElement(
          'button',
          { className: 'ui button', onClick: this.handleSubmit },
          'Save'
        )
      )
    );
  },
  handleSubmit: function (e) {
    e.preventDefault();
    console.log("add note form submitted");
    var form = document.forms.addNoteForm;
    this.props.addNote({
      title: form.title.value,
      description: form.description.value
    });
    // clear the form for the next input
    form.title.value = "";
    form.description.value = "";
  }
});

var NoteRow = React.createClass({
  displayName: 'NoteRow',

  render: function () {
    console.log("Rendering Note:", this.props.note);
    return React.createElement(
      'div',
      { className: 'card' },
      React.createElement(
        'div',
        { className: 'content' },
        React.createElement(
          'div',
          { className: 'header' },
          this.props.note.title
        ),
        React.createElement(
          'div',
          { className: 'meta' },
          '2 days ago'
        ),
        React.createElement(
          'div',
          { className: 'description' },
          React.createElement(
            'p',
            null,
            this.props.note.description
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'extra content' },
        React.createElement('i', { className: 'eye icon' }),
        '121 Reads'
      )
    );
  }
});

var NotesList = React.createClass({
  displayName: 'NotesList',

  render: function () {
    console.log("Rendering NotesList, num of notes: ", this.props.notes.length);
    var noteRows = this.props.notes.map(function (note) {
      return React.createElement(NoteRow, { key: note._id, note: note });
    });
    return React.createElement(
      'div',
      { className: 'ui cards three column stackable m-t-50' },
      noteRows
    );
  }
});

var LifeNotes = React.createClass({
  displayName: 'LifeNotes',

  getInitialState: function () {
    return {
      notes: []
    };
  },
  render: function () {
    console.log("Rendering LifeNotes");
    return React.createElement(
      'div',
      null,
      React.createElement(SectionHeader, null),
      React.createElement(AddForm, { addNote: this.addNote }),
      React.createElement(NotesList, { notes: this.state.notes })
    );
  },
  componentDidMount: function () {
    $.ajax({
      url: '/api/notes',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ notes: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  addNote: function (note) {
    console.log("adding a new note: ", note);
    $.ajax({
      type: 'POST',
      url: '/api/notes',
      contentType: 'application/json',
      data: JSON.stringify(note),
      success: function (data) {
        var note = data;
        // We're advised not to modify the state, it's immutable. So, make a copy.
        var updatedNotes = this.state.notes.push(note);
        console.log("updated notes list: ", updatedNotes);
        this.setState({ note: updatedNotes });
      }.bind(this),
      error: function (xhr, status, err) {
        // ideally, show error to user.
        console.log("Error adding note:", err);
      }
    });
  },
  updateNote: function () {},
  deleteNote: function () {}
});

var mountNode = document.getElementById('section-life-notes');

ReactDOM.render(React.createElement(LifeNotes, null), mountNode);