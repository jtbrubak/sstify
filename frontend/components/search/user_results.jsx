import React from 'react';
import { Link } from 'react-router';

class UserResults extends React.Component {

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
          <span>Users</span>
          <ul>
            {
              this.props.results.map((user) => (
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

}

export default UserResults;
