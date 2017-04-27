import React from 'react';

class Playbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { played: [], queue: [], status: 'pause' };
    this.nextTrack = this.nextTrack.bind(this);
    this.previousTrack = this.previousTrack.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
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

  render() {
    return (
      <div className="playbar">
        <audio onEnded={this.nextTrack}
          ref={ audio => { this.audio = audio; } } src={this.currentTrack()} autoPlay id="audio-player">
        </audio>
        <div className="play-controls">
          <i onClick={this.previousTrack} className="material-icons">skip_previous</i>
          <i id="audio-play-button" onClick={this.play} className={this.playStatus()}>play_circle_outline</i>
          <i id="audio-pause-button" onClick={this.pause} className={this.pauseStatus()}>pause_circle_outline</i>
          <i onClick={this.nextTrack} className="material-icons">skip_next</i>
        </div>
      </div>
    );
  }

}

export default Playbar;
