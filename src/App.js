
var SectionHeader = React.createClass({
  render: function() {
    console.log("Rendering LifeNotesHeader");
    return (
      <h2 className="ui header p-20">
        <img src="../../assets/images/photos/patrick.png" className="ui circular image" />
        <div className="content">
          Set Your Life Goals
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
      <div className="ui form p-20 grey-back">
        <h3>Set a new note</h3>
        <div className="field">
          <label>Note Title</label>
          <input name="last-name" placeholder="e.g. My Life is Meaningful!" type="text" />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea rows="2"></textarea>
        </div>
        <button className="ui button" type="submit">Save</button>
      </div>
    )
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
      return <NoteRow key={note.id} note={note} />
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
      notes: [
        { id:1, title:"title ABC", description:"descript123"},
        { id:2, title:"my lovely dog", description:"descript124"},
        { id:3, title:"title ABD", description:"descript123"}
      ]
    };
  },
  render: function(){
    console.log("Rendering LifeNotes");
    return (
      <div>
        <SectionHeader />
        <AddForm />
        <NotesList notes={this.state.notes} />
      </div>
    )
  }
});

ReactDOM.render(
  <LifeNotes />,
  document.getElementById('section-life-notes')
);
