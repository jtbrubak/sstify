import React from 'react';
import { Link } from 'react-router';
import PlayControls from './play_controls';
import ScrollBar from './scroll_bar';
import shuffle from 'shuffle-array';

class Playbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { played: [], queue: [], shuffleQueue: [], shufflePlayed: [],
      status: 'pause', shuffle: false, repeat: false, elapsed: 0 };
    this.nextTrack = this.nextTrack.bind(this);
    this.updateElapsed = this.updateElapsed.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.toggleShuffle = this.toggleShuffle.bind(this);
    this.toggleRepeat = this.toggleRepeat.bind(this);
  }

  currentTrack() {
    // if (!this.state.queue) {
    //   return;
    // }
    if (this.state.shuffle && this.state.shuffleQueue[0]) {
      return this.state.shuffleQueue[0];
    }
    else if (this.state.queue[0]) {
      return this.state.queue[0];
    } else {
      return "";
    }
  }

  toggleShuffle() {
    var shuffle = this.state.shuffle ? false : true;
    this.setState({ shuffle: shuffle });
  }

  shuffleTrack() {
    if (this.state.shuffleQueue.length === 0) {
      newQueue.concat(shuffle(this.state.played.concat(this.state.queue)));
      this.setState({ shuffleQueue: newQueue });
    }
    const newQueue = this.state.shuffleQueue;
    const newPlayed = this.state.shufflePlayed;
    newPlayed.push(newQueue.shift());
    this.setState({ shufflePlayed: newPlayed, shuffleQueue: newQueue, status: 'play' });
  }

  toggleRepeat() {
    var repeat = this.state.repeat ? false : true;
    this.setState({ repeat: repeat });
  }

  componentWillReceiveProps(nextProps) {
    var shuffled = nextProps.nowPlaying.queue.slice(0);
    this.setState({ played: nextProps.nowPlaying.played,
      queue: nextProps.nowPlaying.queue,
      shuffleQueue: shuffle(shuffled), status: 'play' });
  }

  nextTrack() {
    if (this.state.repeat) {
      this.audio.currentTime = 0;
      this.audio.play();
      return;
    } else if (this.state.shuffle) {
      this.shuffleTrack();
      return;
    }
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
      const nowPlaying = this.currentTrack();
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
          src={this.currentTrack().url} autoPlay id="audio-player">
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
