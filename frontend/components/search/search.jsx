import React from 'react';
import { Link } from 'react-router';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.input = {};
  }

  renderArtistResults() {
    if (!this.props.searchResults.artists) { return; }
    if (this.props.searchResults.artists.length > 0 && this.input.value !== "") {
      return (
        <div className="result-box">
          <span>Artists</span>
          <ul>
            {
              this.props.searchResults.artists.map((artist) => (
                <li className="search-item" key={artist.id}>
                  <Link to={`/artist/${artist.id}`}><img src={artist.image_url}/></Link><br/>
                  <span><Link to={`/artist/${artist.id}`}>{artist.name}</Link></span>
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
  }

  renderAlbumResults() {
    if (!this.props.searchResults.albums) { return; }
    if (this.props.searchResults.albums.length > 0 && this.input.value !== "") {
      return (
        <div className="result-box">
          <span>Albums</span>
          <ul>
            {
              this.props.searchResults.albums.map((album) => (
                <li className="browse-album-item" key={album.id}>
                  <Link to={`/album/${album.id}`}><img src={album.image_url}/></Link><br/>
                  <span><Link to={`/album/${album.id}`}>{album.title}</Link></span>
                  <span id="browse-album-artist-link">By <Link to={`artist/${album.artist.id}`}>{album.artist.name}</Link></span>
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
  }

  renderLength(track) {
    const seconds = track.length % 60 < 10 ? `0${track.length % 60}` : track.length % 60;
    return `${Math.floor(track.length / 60)}:${seconds}`;
  }

  handleTrackButton(i) {
    const tracks = this.props.searchResults.tracks;
    this.props.updateNowPlaying({ played: tracks.slice(0, i), queue: tracks.slice(i) });
  }

  renderTrackResults() {
    if (!this.props.searchResults.tracks) { return; }
    if (this.props.searchResults.tracks.length > 0 && this.input.value !== "") {
      return (
        <div className="result-box">
          <span>Tracks</span>
          <div className="track-list">
            <ol>
              {this.props.searchResults.tracks.map((track, i) =>
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

  renderPlaylistResults() {
    if (!this.props.searchResults.playlists) { return; }
    if (this.props.searchResults.playlists.length > 0 && this.input.value !== "") {
      return (
        <div className="result-box">
          <span>Playlists</span>
          <ul>
            {
              this.props.searchResults.playlists.map((playlist) => (
                <li className="search-item" key={playlist.id}>
                  <Link to={`/playlist/${playlist.id}`}>
                  <img src="http://greenlea.ru/Articles-Directory/Online-Dating-the-First-Step-Is-Your-Profile/i0099rp.jpg"/>
                  {playlist.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
  }

  renderUserResults() {
    if (!this.props.searchResults.users) { return; }
    if (this.props.searchResults.users.length > 0 && this.input.value !== "") {
      return (
        <div className="result-box">
          <span>Users</span>
          <ul>
            {
              this.props.searchResults.users.map((user) => (
                <li className="search-item" key={user.id}>
                  <Link to={`/user/${user.id}/playlists`}>
                  <img src="http://greenlea.ru/Articles-Directory/Online-Dating-the-First-Step-Is-Your-Profile/i0099rp.jpg"/>
                  {user.username}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
  }

  handleChange(e) {
    this.props.search({ search: { terms: e.currentTarget.value } });
  }

  render() {
    return (
      <div className="content-box">
        <div className="search-bar">
          <div className="search-input-box">
            <span>Search for an Artist, Song, Album, Playlist, or User</span>
            <input ref={ input => { this.input = input; } }
              onChange={this.handleChange} placeholder="Start typing..."
              type="text"></input>
          </div>
        </div>
        <nav className="search-nav">
          <ul>

          </ul>
        </nav>
        <div className="results">
          {this.renderArtistResults()}
          {this.renderAlbumResults()}
          {this.renderPlaylistResults()}
          {this.renderUserResults()}
          {this.renderTrackResults()}
        </div>
      </div>
    );
  }

}

export default Search;
