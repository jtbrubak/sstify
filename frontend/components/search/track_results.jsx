import React from 'react';
import { Link } from 'react-router';

class TrackResults extends React.Component {

  constructor(props) {
    super(props);
  }

  renderLength(track) {
    const seconds = track.length % 60 < 10 ? `0${track.length % 60}` : track.length % 60;
    return `${Math.floor(track.length / 60)}:${seconds}`;
  }

  handleTrackButton(i) {
    const tracks = this.props.results;
    this.props.updateNowPlaying({ played: tracks.slice(0, i), queue: tracks.slice(i) });
  }

  render() {
    if (!this.props.results ||
        this.props.results.length === 0 ||
        this.props.input.value === "") { return (<div></div>); }
    if (this.props.results.length > 0 && this.props.input.value !== "") {
      return (
        <div className="result-box">
          <span>Tracks</span>
          <div className="track-list">
            <ol>
              {this.props.results.map((track, i) =>
                <li key={i+1} onDoubleClick={() => this.handleTrackButton(i)}>
                  <div className="playlist-track-display">
                    <div className='before-track-name'>
                      <button className='play-pause-button'>
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
                    <span id="track-length">{this.renderLength(track)}</span>
                  </div>
                </li>)
              }
            </ol>
          </div>
        </div>
      );
    }
  }
}

export default TrackResults;
