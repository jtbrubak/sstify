import React from 'react';
import { Link, withRouter } from 'react-router';

class Main extends React.Component {

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
      <button onClick={this.handleClick}>Log Out</button>
    );
  }
}

export default Main;
