import React from 'react';
import { Link, withRouter } from 'react-router';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.replace('/'));
  }

  render() {
    return (
      <div className="sidebar">
        <button onClick={this.handleClick}>Log Out</button>
      </div>
    );
  }

}

export default Sidebar;
