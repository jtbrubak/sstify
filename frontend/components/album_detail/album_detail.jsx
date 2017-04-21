import React from 'react';
import { Link } from 'react-router';

class AlbumDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAlbumDetail(this.props.id);
  }

  renderInfo(album) {
    if (album.image_url) {
      return (
        <div className="left-side">
          <img src={album.image_url}/>
          <span id="album-title">{album.title}<br/></span>
          <span id="album-info">
            By <Link to={`/artist/${album.artist.id}`}>{album.artist.name}</Link><br/>
          </span>
          <span id="album-info">{album.tracks.length} SONGS</span>
          <button className="play-album-button">P L A Y</button>
          <button className="playlist-add-button">. . .</button>
        </div>
      );
    }
  }

  renderTracks(album) {
    if (album.tracks) {
      return (
        <div className="track-list">
          <ol>
            {album.tracks.map((track, i) =>
              <li key={i+1}>
                <div className="track-list-left-side">
                  <button className='play-pause-button'>
                    <span className='track-num'>{i+1}.</span>
                    <span className='play-button'></span>
                  </button>
                  <span id="track-title">{track.title}</span>
                </div>
                <div className="track-list-right-side">
                  <button className="playlist-add-button">. . .</button>
                  <span id="track-length">{this.renderLength(track)}</span>
                </div>
              </li>)
            }
          </ol>
        </div>
      );
    }
  }

  renderLength(track) {
    const seconds = track.length % 60 < 10 ? `0${track.length % 60}` : track.length % 60;
    return `${Math.floor(track.length / 60)}:${seconds}`;
  }

  render() {
    const album = this.props.albumDetail;
    return (
      <div className="content-box">
        <div className="album-detail">
          {this.renderInfo(album)}
          {this.renderTracks(album)}
        </div>
      </div>
    );
  }

}

export default AlbumDetail;
