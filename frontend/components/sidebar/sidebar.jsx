import React from 'react';
import { Link, withRouter } from 'react-router';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderUsername = this.renderUsername.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.replace('/'));
  }

  renderUsername() {
    if (this.props.currentUser) {
      return this.props.currentUser.username;
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src="https://s3.amazonaws.com/sstify-dev/images/logo.png"/><span>SSTify</span>
        </div>
        {this.renderUsername()}
        <button onClick={this.handleClick}>Log Out</button>
      </div>
    );
  }
}

export default Sidebar;
