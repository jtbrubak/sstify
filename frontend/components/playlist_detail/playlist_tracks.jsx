import React from 'react';
import { Link } from 'react-router';

class PlaylistTracks extends React.Component {

  constructor(props) {
    super(props);
    this.parent = this.props.parent;
  }

  removeTrack(id) {
    this.parent.props.removeTrack(id);
  }

  handleTrackButton(i) {
    const tracks = this.props.playlist.tracks;
    this.parent.props.updateNowPlaying({ played: tracks.slice(0, i), queue: tracks.slice(i) });
  }

  renderLength(track) {
    const seconds = track.length % 60 < 10 ? `0${track.length % 60}` : track.length % 60;
    return `${Math.floor(track.length / 60)}:${seconds}`;
  }

  render() {
    debugger
    if (this.props.playlist.tracks) {
      return (
        <div className="track-list">
          <ol>
            {this.props.playlist.tracks.map((track, i) =>
              <li key={i+1} onDoubleClick={() => this.handleTrackButton(i)}>
                <div className="playlist-track-display">
                  <div className='before-track-name'>
                    <button className='play-pause-button'>
                      <span className='track-num'>{i+1}.</span>
                      <span onClick={() => this.handleTrackButton(i)} className='play-button'></span>
                    </button>
                  </div>
                  <div className="track-list-left-side">
                    <div className="first-line">
                      <span id="track-title">{track.title}</span>
                    </div>
                    <div className="second-line">
                      <Link to={`/artist/${track.artist.id}`}><span>{track.artist.name}</span></Link>
                      <span>·</span>
                      <Link to={`album/${track.album.id}`}><span>{track.album.title}</span></Link>
                    </div>
                  </div>
                </div>
                <div className="track-list-right-side">
                  <i onClick={() => this.removeTrack(track.id)} className="material-icons">delete</i>
                  <span id="track-length">{this.renderLength(track)}</span>
                </div>
              </li>)
            }
          </ol>
        </div>
      );
    } else { return (<div className="track-list"></div>); }
  }

}

export default PlaylistTracks;
