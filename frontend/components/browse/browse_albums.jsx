import React from 'react';
import { Link } from 'react-router';

class BrowseAlbums extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllAlbums();
  }

  renderAlbums() {
    return (
      <ul>
        {
          this.props.allAlbums.map((album) => (
            <li className="browse-album-item" key={album.id}>
              <Link to={`/album/${album.id}`}><img src={album.image_url}/></Link><br/>
              <span><Link to={`/album/${album.id}`}>{album.title}</Link></span>
              <span id="browse-album-artist-link">By <Link to={`artist/${album.artist.id}`}>{album.artist.name}</Link></span>
            </li>
          ))
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="browse-albums">
        {this.renderAlbums()}
      </div>
    );
  }
}

export default BrowseAlbums;
