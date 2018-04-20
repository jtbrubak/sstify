import React from 'react';
import { Link } from 'react-router';
import TrackResults from './track_results';
import ArtistResults from './artist_results';
import PlaylistResults from './playlist_results';
import UserResults from './user_results';
import AlbumResults from './album_results';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { change: null };
  }

  componentWillMount() {
    this.input = {};
  }

  handleChange(e) {
    if (this.state.change) {
      clearTimeout(this.state.change);
      this.setState({ change: null });
    }
    var terms = e.currentTarget.value;
    this.setState({ change: setTimeout(() => {
      this.props.search({ search: { terms: terms } })
    }, 1000) });
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
          <ArtistResults results={this.props.searchResults.artists} input={this.input}/>
          <AlbumResults results={this.props.searchResults.albums} input={this.input}/>
          <PlaylistResults results={this.props.searchResults.playlists} input={this.input}/>
          <UserResults results={this.props.searchResults.users} input={this.input}/>
          <TrackResults results={this.props.searchResults.tracks} input={this.input}
                        updateNowPlaying={this.props.updateNowPlaying}/>
        </div>
      </div>
    );
  }

}

export default Search;
