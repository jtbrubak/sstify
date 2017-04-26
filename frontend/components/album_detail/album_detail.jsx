import React from 'react';
import { Link } from 'react-router';

class AlbumDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showAlbumDropdown: false, showTrackDropdown: null };
    this.toggleAlbumDropdown = this.toggleAlbumDropdown.bind(this);
    this.toggleTrackDropdown = this.toggleTrackDropdown.bind(this);
  }

  componentWillMount() {
    this.props.fetchAlbumDetail(this.props.id);
  }

  showAlbumDropdown() {
    return this.state.showAlbumDropdown ? 'album-playlist-add-show' : 'album-playlist-add';
  }

  toggleAlbumDropdown() {
    const newState = this.state.showAlbumDropdown ? false : true;
    this.setState({ showAlbumDropdown: newState });
  }

  toggleTrackDropdown(i) {
    if (this.state.showTrackDropdown === null) {
      this.setState({showTrackDropdown: i});
    } else {
      this.setState({showTrackDropdown: null});
    }
  }

  renderDropdown(tracks) {
    if (this.props.currentUserDetail.playlists) {
      return (
        <div>
          <span>Add to Playlist</span>
          <ul>
            {
              this.props.currentUserDetail.playlists.map((playlist) => (
                <li onClick={() => this.addTracksToPlaylist(tracks, playlist.id)} key={playlist.id}>
                  <Link>{playlist.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
  }

  renderTrackDropdown(track, i) {
    if (i == this.state.showTrackDropdown) {
      return (
        <div className={`track-playlist-add`}>
          <span>Add to Playlist</span>
          <ul>
            {
              this.props.currentUserDetail.playlists.map((playlist) => (
                <li onClick={() => this.addTracksToPlaylist([track], playlist.id)} key={playlist.id}>
                  {playlist.title}
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
  }

  addTracksToPlaylist(tracks, playlist_id) {
    this.props.addTracksToPlaylist({ tracks, playlist_id });
    this.setState({ showAlbumDropdown: false, showTrackDropdown: null });
  }

  renderInfo(album) {
    if (album.image_url) {
      return (
        <div className="left-side">
          <img src={album.image_url}/><br/>
          <span id="album-title">{album.title}<br/></span>
          <span id="album-info">
            By <Link to={`/artist/${album.artist.id}`}>{album.artist.name}</Link><br/>
          </span>
          <span id="album-info">{album.tracks.length} SONGS</span>
          <button className="play-album-button">PLAY</button>
          <button className="playlist-add-button"  onClick={this.toggleAlbumDropdown}>. . .</button>
          <div className={this.showAlbumDropdown()}>
            {this.renderDropdown(album.tracks)}
          </div>
        </div>
      );
    }
  }

  renderTracks(album) {
    if (album.tracks) {
      return (
        <div className="track-list">
          <ol>
            {
              album.tracks.map((track, i) =>
              <li key={i+1}>
                <div className="track-list-left-side">
                  <button className='play-pause-button'>
                    <span className='track-num'>{i+1}.</span>
                    <span className='play-button'></span>
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
