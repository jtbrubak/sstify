import React from 'react';
import { Link } from 'react-router';
import TrackList from './track_list';

class AlbumDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showAlbumDropdown: false, showTrackDropdown: null };
    this.toggleAlbumDropdown = this.toggleAlbumDropdown.bind(this);
    this.handleAlbumButton = this.handleAlbumButton.bind(this);
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

  handleAlbumButton() {
    this.props.updateNowPlaying({ played: [], queue: this.props.albumDetail.tracks });
  }

  renderDropdown(tracks) {
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

  addTracksToPlaylist(tracks, playlist_id) {
    this.props.addTracksToPlaylist({ tracks, playlist_id });
    this.setState({ showAlbumDropdown: false, showTrackDropdown: null });
  }

  renderInfo(album) {
    return (
      <div className="left-side">
        <img src={album.image_url}/><br/>
        <span id="album-title">{album.title}<br/></span>
        <span id="album-info">
          By <Link to={`/artist/${album.artist.id}`}>{album.artist.name}</Link><br/>
        </span>
        <span id="album-info">{album.tracks.length} SONGS</span>
        <button onClick={this.handleAlbumButton} className="play-album-button">PLAY</button>
        <button className="playlist-add-button"  onClick={this.toggleAlbumDropdown}>. . .</button>
        <div className={this.showAlbumDropdown()}>
          {this.renderDropdown(album.tracks)}
        </div>
      </div>
    );
  }

  render() {
    const album = this.props.albumDetail;
    return (
      <div className="content-box">
        <div className="album-detail">
          {this.renderInfo(album)}
          <TrackList album={album} parent={this}/>
        </div>
      </div>
    );
  }

}

export default AlbumDetail;
