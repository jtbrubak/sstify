import React from 'react';
import { Link } from 'react-router';

class ArtistDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }

  componentWillMount() {
    this.props.fetchArtistDetail(this.props.id);
  }

  handleButton() {
    let tracks = [];
    this.props.artistDetail.albums.forEach((album) => {
      tracks = tracks.concat(album.tracks);
    });
    this.props.updateNowPlaying({ played: [], queue: tracks });
  }

  renderBanner(artist) {
    if (artist.image_url) {
      const bannerImage = {
        background: `linear-gradient(rgba(84,72,72,.6), rgba(84,72,72,.6)), url("${artist.image_url}")`,
        backgroundSize: '70% 100%'
      };
      return (
        <div className="banner" style={bannerImage}>
          <span>{artist.name}</span>
          <button onClick={this.handleButton}>P L A Y</button>
        </div>
      );
    }
  }

  renderAlbums(artist) {
    if (artist.albums) {
      return (
        <div className="artist-album-list">
          <ul>
            {artist.albums.map((album) =>
              <li className="artist-album-item" key={album.id}>
                <Link to={`/album/${album.id}`}><img src={album.image_url}/></Link>
                <span><Link to={`/album/${album.id}`}>{album.title}</Link></span>
                <span className="album-artist-link">By <Link to={`/artist/${album.artist.id}`}>{album.artist.name}</Link></span>
              </li>
            )}
          </ul>
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
          <span>Albums</span>
          {this.renderAlbums(artist)}
        </div>
      </div>
    );
  }

}

export default ArtistDetail;
