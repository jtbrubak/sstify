import React from 'react';
import { Link } from 'react-router';

class UserDetailFollowedPlaylists extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    debugger
    this.props.fetchUserDetail(this.props.id);
  }

  renderPlaylists() {
    return (
      <ul>
        {
          this.props.userDetail.followed_playlists.map((playlist) => (
            <li className="followed-playlist-item" key={playlist.id}>
              <Link to={`/playlist/${playlist.id}`}>
              <img src="http://greenlea.ru/Articles-Directory/Online-Dating-the-First-Step-Is-Your-Profile/i0099rp.jpg"/>
              </Link>
            </li>
          ))
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="browse-artists">
        {this.renderPlaylists()}
      </div>
    );
  }
}

export default UserDetailFollowedPlaylists;
