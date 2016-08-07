import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class FilterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      initFilter: ''
    };
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  render(){
    console.log("Rendering LifeNotesFilterForm");
    return (
      <div className="ui form p-t-20">
        <form name="filterNoteForm">
          <div className="field">
            <label></label>
            <input name="title" placeholder="Search for notes" type="text" onChange={this.onChangeTitle} autoComplete="off"/>
          </div>
        </form>
      </div>
    )
  }

  onChangeTitle(e){
    console.log("Filter Notes by Title: ", e.target.value);
    this.setState({title: e.target.value});
    this.props.changeHandler({title: e.target.value});
  }
}

/*
FilterForm.propTypes = {
    initFilter: PropTypes.object.isRequired
}
*/

export default FilterForm;
