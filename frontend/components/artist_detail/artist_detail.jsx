import React from 'react';
import { Link } from 'react-router';

class ArtistDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchArtistDetail(this.props.id);
  }

  renderBanner(artist) {
    if (artist.image_url) {
      return (
        <div className="banner">
          <img className="artist-logo" src={artist.image_url}/>
        </div>
      );
    }
  }

  render() {
    const artist = this.props.artistDetail;
    return (
      <div className="content-box">
        <div className="artist-detail">
          {this.renderBanner(artist)}
        </div>
      </div>
    );
  }

}

export default ArtistDetail;
