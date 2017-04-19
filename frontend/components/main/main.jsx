import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import PlaybarContainer from '../playbar/playbar_container';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="top-side-elements">
          <SidebarContainer router={this.props.router}/>
          {this.props.children}
        </div>
        <div className="bottom-side-elements">
          <PlaybarContainer/>
        </div>
      </div>
    );
  }
}

export default Main;
