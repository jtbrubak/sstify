import React from 'react';
import { Link } from 'react-router';

class UserDetailFollowedUsers extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUserDetail(this.props.id);
  }

  renderUsers() {
    if (this.props.userDetail.followed_users) {
      return (
        <ul>
          {
            this.props.userDetail.followed_users.map((user) => (
              <li className="followed-playlist-item" key={user.id}>
                <Link to={`/user/${user.id}/playlists`}>
                <img src="http://greenlea.ru/Articles-Directory/Online-Dating-the-First-Step-Is-Your-Profile/i0099rp.jpg"/>
                {user.username}
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
        {this.renderUsers()}
      </div>
    );
  }
}

export default UserDetailFollowedUsers;
