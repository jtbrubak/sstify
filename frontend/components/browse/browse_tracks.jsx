import React from 'react';
import { Link } from 'react-router';

class BrowseTracks extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllTracks();
  }

  render() {
    return (
      <div className="content-box">
        <div className="browse-tracks">

        </div>
      </div>
    );
  }
}

export default BrowseTracks;
