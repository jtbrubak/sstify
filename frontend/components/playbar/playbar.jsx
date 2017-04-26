import React from 'react';

class Playbar extends React.Component {

  render() {
    return (
      <div className="playbar">
        <div className="play-controls">
          <i className="material-icons">skip_previous</i>
          <i className="material-icons">play_circle_outline</i>
          <i className="material-icons">skip_next</i>
        </div>
      </div>
    );
  }

}

export default Playbar;
