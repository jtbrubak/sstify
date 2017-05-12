import React from 'react';
import { Link } from 'react-router';
import PlayControls from './play_controls';
import ScrollBar from './scroll_bar';

class Playbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { played: [], queue: [], status: 'pause', elapsed: 0 };
    this.nextTrack = this.nextTrack.bind(this);
    this.updateElapsed = this.updateElapsed.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
  }

  currentTrack() {
    if (!this.state.queue) {
      return;
    }
    if (this.state.queue[0]) {
      return this.state.queue[0].url;
    } else {
      return "";
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ played: nextProps.nowPlaying.played, queue: nextProps.nowPlaying.queue, status: 'play' });
  }

  nextTrack() {
    const newQueue = this.state.queue;
    const newPlayed = this.state.played;
    newPlayed.push(newQueue.shift());
    this.setState({ played: newPlayed, queue: newQueue, status: 'play' });
  }

  renderNowPlayingInfo() {
    if (!this.state.queue) {
      return;
    }
    if (this.state.queue[0]) {
      const nowPlaying = this.state.queue[0];
      return (
        <div className="now-playing-info">
          <img src={nowPlaying.image_url}/>
          <div className="now-playing-spans">
            <span>
              <Link to={`/album/${nowPlaying.album_id}`}>{nowPlaying.title}</Link>
            </span>
            <span>
              <Link to={`/artist/${nowPlaying.artist_id}`}>{nowPlaying.artist.name}</Link>
            </span>
          </div>
        </div>
      );
    } else {
      return (<div className="now-playing-info"></div>);
    }
  }

  updateElapsed() {
    if (this.audio !== undefined) {
      this.setState({ elapsed: this.audio.currentTime });
    }
  }

  changeVolume(e) {
    this.audio.volume = (e.currentTarget.value);
  }

  render() {
    return (
      <div className="playbar">
        <audio onEnded={this.nextTrack}
          onTimeUpdate={this.updateElapsed}
          ref={ audio => { this.audio = audio; } }
          src={this.currentTrack()} autoPlay id="audio-player">
        </audio>
        {this.renderNowPlayingInfo()}
        <div className="play-controls">
          <PlayControls playbar={this}/>
          <ScrollBar playbar={this} audio={this.audio}/>
        </div>
        <div className="volume-control">
          <i className="material-icons">volume_up</i>
          <input onChange={this.changeVolume} type="range" id="rngVolume" min="0" max="1" step="0.01" default="1"/>
        </div>
      </div>
    );
  }
}

export default Playbar;
