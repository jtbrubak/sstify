import React from 'react';
import { Link } from 'react-router';

class UserDetailPlaylists extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUserDetail(this.props.id);
  }

  renderPlaylists() {
    if (this.props.userDetail.playlists) {
      return (
        <ul>
          {
            this.props.userDetail.playlists.map((playlist) => (
              <li className="followed-playlist-item" key={playlist.id}>
                <Link to={`/playlist/${playlist.id}`}>
                <img src="http://greenlea.ru/Articles-Directory/Online-Dating-the-First-Step-Is-Your-Profile/i0099rp.jpg"/>
                {playlist.title}
                </Link>
              </li>
            ))
          }
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="user-followed-playlists">
        {this.renderPlaylists()}
      </div>
    );
  }
}

export default UserDetailPlaylists;
