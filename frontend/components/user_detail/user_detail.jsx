import React from 'react';
import { Link } from 'react-router';

class UserDetail extends React.Component {

  constructor(props) {
    super(props);
    this.renderButton = this.renderButton.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.followStatus = this.followStatus.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserDetail(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.props.fetchUserDetail(nextProps.id);
    }
  }

  checkSelected(linkPath) {
    if (linkPath === this.props.location.pathname) { return 'selected-user-nav'; }
  }

  renderButton() {
    if (this.props.id === this.props.currentUser.id) {
      return;
    } else {
      return (
        <button className="user-follow-button" onClick={this.toggleFollow}>{this.followStatus()}</button>
      );
    }
  }

  followStatus() {
    if (this.props.currentUserDetail.followed_users) {
      let status = "FOLLOW";
      this.props.currentUserDetail.followed_users.forEach((user) => {
        if ( user.id === this.props.userDetail.id) {
          status = "UNFOLLOW";
        }
      });
      return status;
    }
  }

  toggleFollow() {
    if (this.followStatus() === "FOLLOW") {
      this.props.createUserFollow({ user_follow: { follower_id: this.props.currentUser.id, followed_id: this.props.userDetail.id } });
    } else {
      this.props.deleteUserFollow({ user_follow: { follower_id: this.props.currentUser.id, followed_id: this.props.userDetail.id } });
    }
  }

  render() {
    return (
      <div className="content-box">
        <div className="user-header">
          <img src="http://greenlea.ru/Articles-Directory/Online-Dating-the-First-Step-Is-Your-Profile/i0099rp.jpg"/>
          <h1>{this.props.userDetail.username}</h1>
          {this.renderButton()}
          <ul className="user-nav">
            <li><Link to={`/user/playlists/${this.props.id}`}
              className={this.checkSelected(`/user/playlists/${this.props.id}`)}>PLAYLISTS</Link></li>
            <li><Link to={`/user/followed_playlists/${this.props.id}`}
              className={this.checkSelected(`/user/followed_playlists/${this.props.id}`)}>FOLLOWED PLAYLISTS</Link></li>
            <li><Link to={`/user/followed_users/${this.props.id}`}
              className={this.checkSelected(`/user/followed_users/${this.props.id}`)}>FOLLOWED USERS</Link></li>
          </ul>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default UserDetail;
