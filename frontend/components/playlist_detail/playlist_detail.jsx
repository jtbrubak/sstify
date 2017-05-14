import React from 'react';
import { Link } from 'react-router';
import PlaylistTracks from './playlist_tracks';

class PlaylistDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.followStatus = this.followStatus.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.handlePlaylistButton = this.handlePlaylistButton.bind(this);
  }

  componentWillMount() {
    this.props.fetchPlaylistDetail(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.props.fetchPlaylistDetail(nextProps.id);
    }
  }

  handleDelete() {
    this.props.deletePlaylist(this.props.id).then(() => {
      this.props.router.replace('/browse/artists');
      location.reload(true);
    });
  }

  renderButton() {
    if (this.props.currentUser) {
      if (this.props.playlistDetail.user.id === this.props.currentUser.id) {
        return (
          <button className="play-playlist-button" onClick={this.handleDelete}>DELETE</button>
        );
      } else {
        return (
          <button className="play-playlist-button" onClick={this.toggleFollow}>{this.followStatus()}</button>
        );
      }
    }
  }

  handlePlaylistButton() {
    this.props.updateNowPlaying({ played: [], queue: this.props.playlistDetail.tracks });
  }

  toggleFollow() {
    if (this.followStatus() === "FOLLOW") {
      this.props.createPlaylistFollow({ playlist_follow: { user_id: this.props.currentUser.id, playlist_id: this.props.playlistDetail.id } });
    } else {
      this.props.deletePlaylistFollow({ playlist_follow: { user_id: this.props.currentUser.id, playlist_id: this.props.playlistDetail.id } });
    }
  }

  followStatus() {
    if (this.props.currentUserDetail) {
      let status = "FOLLOW";
      this.props.currentUserDetail.followed_playlists.forEach((playlist) => {
        if ( playlist.id === this.props.playlistDetail.id) {
          status = "UNFOLLOW";
        }
      });
      return status;
    }
  }

  renderInfo(playlist) {
    const image_url = "http://greenlea.ru/Articles-Directory/Online-Dating-the-First-Step-Is-Your-Profile/i0099rp.jpg";
    if (playlist.tracks) {
      return (
        <div className="left-side">
          <img src={image_url}/><br/>
          <span id="playlist-title">{playlist.title}<br/></span>
          <span id="playlist-info">
            By <Link to={`/user/${playlist.user.id}/playlists`}>{playlist.user.username}<br/></Link>
          </span>
          <span id="playlist-info">{playlist.tracks.length} SONGS</span>
          <button onClick={this.handlePlaylistButton} className="play-playlist-button">PLAY</button>
          {this.renderButton()}
        </div>
      );
    }
  }

  render() {
    const playlist = this.props.playlistDetail;
    return (
      <div className="content-box">
        <div className="playlist-detail">
          {this.renderInfo(playlist)}
          <PlaylistTracks parent={this} playlist={this.props.playlistDetail}/>
        </div>
      </div>
    );
  }
}

export default PlaylistDetail;
