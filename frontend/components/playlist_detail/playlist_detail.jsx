import React from 'react';
import { Link } from 'react-router';

class PlaylistDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPlaylistDetail(this.props.id);
  }

  renderInfo(playlist) {
    const image_url = "http://greenlea.ru/Articles-Directory/Online-Dating-the-First-Step-Is-Your-Profile/i0099rp.jpg"
    if (playlist.tracks) {
      return (
        <div className="left-side">
          <img src={image_url}/><br/>
          <span id="playlist-title">{playlist.title}<br/></span>
          <span id="playlist-info">
            By {playlist.user}<br/>
          </span>
          <span id="playlist-info">{playlist.tracks.length} SONGS</span>
          <button className="play-playlist-button">P L A Y</button>
          <button className="playlist-add-button">. . .</button>
        </div>
      );
    }
  }

  renderTracks(playlist) {
    if (playlist.tracks) {
      return (
        <div className="track-list">
          <ol>
            {playlist.tracks.map((track, i) =>
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
    const playlist = this.props.playlistDetail;
    return (
      <div className="content-box">
        <div className="playlist-detail">
          {this.renderInfo(playlist)}
          {this.renderTracks(playlist)}
        </div>
      </div>
    );
  }

}

export default PlaylistDetail;
