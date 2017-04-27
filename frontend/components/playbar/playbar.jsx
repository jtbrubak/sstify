import React from 'react';
import { Link } from 'react-router';

class Playbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { played: [], queue: [], status: 'pause', elapsed: 0 };
    this.nextTrack = this.nextTrack.bind(this);
    this.previousTrack = this.previousTrack.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.updateElapsed = this.updateElapsed.bind(this);
  }

  currentTrack() {
    if (this.state.queue[0]) {
      return this.state.queue[0].url;
    } else {
      return "";
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ played: nextProps.nowPlaying.played, queue: nextProps.nowPlaying.queue, status: 'play' });
  }

  previousTrack() {
    const newQueue = this.state.queue;
    const newPlayed = this.state.played;
    newQueue.unshift(newPlayed.pop());
    this.setState({ played: newPlayed, queue: newQueue, status: 'play' });
  }

  nextTrack() {
    const newQueue = this.state.queue;
    const newPlayed = this.state.played;
    newPlayed.push(newQueue.shift());
    this.setState({ played: newPlayed, queue: newQueue, status: 'play' });
  }

  pause() {
    this.audio.pause();
    this.setState({ status: 'pause' });
  }

  play() {
    this.audio.play();
    this.setState({ status: 'play' });
  }

  pauseStatus() {
    if (this.state.status === 'play') {
      return "material-icons";
    } else {
      return "hidden";
    }
  }

  playStatus() {
    if (this.state.status === 'play') {
      return "hidden";
    } else {
      return "material-icons";
    }
  }

  renderNowPlayingInfo() {
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
              <Link to={`/artist/${nowPlaying.artist_id}`}>{nowPlaying.artist}</Link>
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

  renderLength(length) {
    if (this.audio) {
      const seconds = length % 60 < 10 ? `0${Math.floor(length % 60)}` : Math.floor(length % 60);
      return `${Math.floor(length / 60)}:${seconds}`;
    }
  }

  renderScrollBar() {
    if (this.audio) {
      return (
        <div className="play-scroll-bar">
          <span>{this.renderLength(this.state.elapsed)}</span>
          <progress value={(this.state.elapsed/this.state.queue[0].length) * 100} max="100"></progress>
          <span>{this.renderLength(this.state.queue[0].length)}</span>
        </div>
      );
    } else {
      return (
        <div className="play-scroll-bar">
          <span>0:00</span>
          <progress value="0" max="100"></progress>
          <span>0:00</span>
        </div>
      );
    }
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
          <div className="control-buttons">
            <i onClick={this.previousTrack} className="material-icons">skip_previous</i>
            <i id="audio-play-button" onClick={this.play} className={this.playStatus()}>play_circle_outline</i>
            <i id="audio-pause-button" onClick={this.pause} className={this.pauseStatus()}>pause_circle_outline</i>
            <i onClick={this.nextTrack} className="material-icons">skip_next</i>
          </div>
          {this.renderScrollBar()}
        </div>
        <div className="volume-control">
          <input type="range" id="rngVolume" min="0" max="1" step="0.01" default="1"/>
        </div>
      </div>
    );
  }

}

export default Playbar;
