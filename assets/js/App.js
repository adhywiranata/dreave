
var SectionHeader = React.createClass({
  displayName: "SectionHeader",

  render: function () {
    console.log("Rendering LifeNotesHeader");
    return React.createElement(
      "h2",
      { className: "ui header p-20" },
      React.createElement("img", { src: "../../assets/images/photos/patrick.png", className: "ui circular image" }),
      React.createElement(
        "div",
        { className: "content" },
        "Set Your Life Goals",
        React.createElement(
          "div",
          { className: "sub header" },
          "Find what others are talking about"
        )
      )
    );
  }
});

var AddForm = React.createClass({
  displayName: "AddForm",

  render: function () {
    console.log("Rendering LifeNotesForm");
    return React.createElement(
      "div",
      { className: "ui form p-20 grey-back" },
      React.createElement(
        "h3",
        null,
        "Set a new note"
      ),
      React.createElement(
        "div",
        { className: "field" },
        React.createElement(
          "label",
          null,
          "Note Title"
        ),
        React.createElement("input", { name: "last-name", placeholder: "e.g. My Life is Meaningful!", type: "text" })
      ),
      React.createElement(
        "div",
        { className: "field" },
        React.createElement(
          "label",
          null,
          "Description"
        ),
        React.createElement("textarea", { rows: "2" })
      ),
      React.createElement(
        "button",
        { className: "ui button", type: "submit" },
        "Save"
      )
    );
  }
});

var NoteRow = React.createClass({
  displayName: "NoteRow",

  render: function () {
    console.log("Rendering Note:", this.props.note);
    return React.createElement(
      "div",
      { className: "card" },
      React.createElement(
        "div",
        { className: "content" },
        React.createElement(
          "div",
          { className: "header" },
          this.props.note.title
        ),
        React.createElement(
          "div",
          { className: "meta" },
          "2 days ago"
        ),
        React.createElement(
          "div",
          { className: "description" },
          React.createElement(
            "p",
            null,
            this.props.note.description
          )
        )
      ),
      React.createElement(
        "div",
        { className: "extra content" },
        React.createElement("i", { className: "eye icon" }),
        "121 Reads"
      )
    );
  }
});

var NotesList = React.createClass({
  displayName: "NotesList",

  render: function () {
    console.log("Rendering NotesList, num of notes: ", this.props.notes.length);
    var noteRows = this.props.notes.map(function (note) {
      return React.createElement(NoteRow, { key: note.id, note: note });
    });
    return React.createElement(
      "div",
      { className: "ui cards three column stackable m-t-50" },
      noteRows
    );
  }
});

var LifeNotes = React.createClass({
  displayName: "LifeNotes",

  getInitialState: function () {
    return {
      notes: [{ id: 1, title: "title ABC", description: "descript123" }, { id: 2, title: "my lovely dog", description: "descript124" }, { id: 3, title: "title ABD", description: "descript123" }]
    };
  },
  render: function () {
    console.log("Rendering LifeNotes");
    return React.createElement(
      "div",
      null,
      React.createElement(SectionHeader, null),
      React.createElement(AddForm, null),
      React.createElement(NotesList, { notes: this.state.notes })
    );
  }
});

ReactDOM.render(React.createElement(LifeNotes, null), document.getElementById('section-life-notes'));