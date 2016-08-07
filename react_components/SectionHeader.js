import React, {Component} from 'react';
import { render } from 'react-dom';

class SectionHeader extends Component {
  render() {
    console.log("Rendering LifeNotesHeader");
    return (
      <h2 className="ui header p-20">
        <img src="../../public/images/photos/patrick.png" className="ui circular image" />
        <div className="content">
          Set Your Life Goals!
          <div className="sub header">Find what others are talking about</div>
        </div>
      </h2>
    );
  }
}

export default SectionHeader;
