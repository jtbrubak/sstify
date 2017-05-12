import React from 'react';
import { Link } from 'react-router';

class PlaylistResults extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.results ||
        this.props.results.length === 0 ||
        this.props.input.value === "") { return (<div></div>); }
    if (this.props.results.length > 0 && this.props.input.value !== "") {
      return (
        <div className="result-box">
          <span>Playlists</span>
          <ul>
            {
              this.props.results.map((playlist) => (
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
}

export default PlaylistResults;
