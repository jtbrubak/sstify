import React from 'react';
import { Link } from 'react-router';

class TrackList extends React.Component {

  constructor(props) {
    super(props);
    this.parent = this.props.parent;
  }

  handleTrackButton(i) {
    const tracks = this.parent.props.albumDetail.tracks;
    this.parent.props.updateNowPlaying({ played: tracks.slice(0, i), queue: tracks.slice(i) });
  }

  toggleTrackDropdown(i) {
    if (this.parent.state.showTrackDropdown === null) {
      this.parent.setState({showTrackDropdown: i});
    } else {
      this.parent.setState({showTrackDropdown: null});
    }
  }

  renderLength(track) {
    const seconds = track.length % 60 < 10 ? `0${track.length % 60}` : track.length % 60;
    return `${Math.floor(track.length / 60)}:${seconds}`;
  }

  renderTrackDropdown(track, i) {
    if (i == this.parent.state.showTrackDropdown) {
      return (
        <div className={`track-playlist-add`}>
          <span>Add to Playlist</span>
          <ul>
            {
              this.parent.props.currentUserDetail.playlists.map((playlist) => (
                <li onClick={() => this.parent.addTracksToPlaylist([track], playlist.id)} key={playlist.id}>
                  {playlist.title}
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="track-list">
        <ol>
          {
            this.props.album.tracks.map((track, i) =>
            <li key={i+1} onDoubleClick={() => this.handleTrackButton(i)}>
              <div className="track-list-left-side">
                <button className='play-pause-button'>
                  <span className='track-num'>{i+1}.</span>
                  <span onClick={() => this.handleTrackButton(i)} className='play-button'></span>
                </button>
                <span id="track-title">{track.title}</span>
              </div>
              <div className="track-list-right-side">
                <button className="track-playlist-add-button"
                  onClick={() => this.toggleTrackDropdown(i+1)}>. . .</button>
                <span id="track-length">{this.renderLength(track)}</span>
                {this.renderTrackDropdown(track, i+1)}
              </div>
            </li>)
          }
        </ol>
      </div>
    );
  }
}

export default TrackList;
