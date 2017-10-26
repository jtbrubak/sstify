import React from 'react';

class PlayControls extends React.Component {

  constructor(props) {
    super(props);
    this.playbar = this.props.playbar;
    this.previousTrack = this.previousTrack.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.pauseStatus = this.pauseStatus.bind(this);
    this.playStatus = this.playStatus.bind(this);
  }

  previousTrack() {
    const newQueue = this.playbar.state.queue;
    const newPlayed = this.playbar.state.played;
    newQueue.unshift(newPlayed.pop());
    this.playbar.setState({ played: newPlayed, queue: newQueue, status: 'play' });
  }

  pause() {
    this.playbar.audio.pause();
    this.playbar.setState({ status: 'pause' });
  }

  play() {
    if (this.playbar.state.queue[0]) {
      this.playbar.audio.play();
      this.playbar.setState({ status: 'play' });
    }
  }

  pauseStatus() {
    if (this.playbar.state.status === 'play') {
      return "material-icons";
    } else {
      return "hidden";
    }
  }

  playStatus() {
    if (this.playbar.state.status === 'play') {
      return "hidden";
    } else {
      return "material-icons";
    }
  }

  render() {
    return (
      <div className="control-buttons">
        <i onClick={this.previousTrack} className="material-icons">skip_previous</i>
        <i id="audio-play-button" onClick={this.play} className={this.playStatus()}>play_circle_outline</i>
        <i id="audio-pause-button" onClick={this.pause} className={this.pauseStatus()}>pause_circle_outline</i>
        <i onClick={this.playbar.nextTrack} className="material-icons">skip_next</i>
      </div>
    );
  }
}

export default PlayControls;
