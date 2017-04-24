import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createPlaylist } from '../../actions/playlist_actions';
import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  path: ownProps.router.location.pathname
});

const mapDispatchToProps = (dispatch) => ({
  createPlaylist: (data) => dispatch(createPlaylist(data)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
