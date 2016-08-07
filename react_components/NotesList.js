import React, {Component} from 'react';
import { render } from 'react-dom';

class NoteRow extends Component {
  render(){
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
          123 Reads
        </div>
      </div>
    )
  }
}

class NotesList extends Component {
  render(){
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
}

module.exports = NotesList;
