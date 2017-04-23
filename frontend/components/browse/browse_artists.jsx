import React from 'react';
import { Link } from 'react-router';

class BrowseArtists extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllArtists();
  }

  renderArtists() {
    return (
      <ul>
        {
          this.props.allArtists.map((artist) => (
            <li className="browse-artist-item" key={artist.id}>
              <Link to={`/artist/${artist.id}`}><img src={artist.image_url}/></Link><br/>
              <span><Link to={`/artist/${artist.id}`}>{artist.name}</Link></span>
            </li>
          ))
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="browse-artists">
        {this.renderArtists()}
      </div>
    );
  }
}

export default BrowseArtists;
