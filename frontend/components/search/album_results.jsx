import React from 'react';
import { Link } from 'react-router';

class AlbumResults extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.results ||
        this.props.results.length === 0 ||
        this.props.input.value === "") { return (<div></div>); }
    if (this.props.results.length > 0 && this.props.input.value !== "") {
      return (
        <div className="result-box">
          <span>Albums</span>
          <ul>
            {
              this.props.results.map((album) => (
                <li className="browse-album-item" key={album.id}>
                  <Link to={`/album/${album.id}`}><img src={album.image_url}/></Link><br/>
                  <span><Link to={`/album/${album.id}`}>{album.title}</Link></span>
                  <span id="browse-album-artist-link">By <Link to={`artist/${album.artist.id}`}>{album.artist.name}</Link></span>
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
  }

}

export default AlbumResults;
