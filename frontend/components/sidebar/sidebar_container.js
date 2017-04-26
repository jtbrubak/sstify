import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createPlaylist } from '../../actions/playlist_actions';
import { fetchCurrentUserDetail } from '../../actions/user_actions';
import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  currentUserDetail: state.currentUserDetail,
  path: ownProps.router.location.pathname
});

const mapDispatchToProps = (dispatch) => ({
  createPlaylist: (data) => dispatch(createPlaylist(data)),
  logout: () => dispatch(logout()),
  fetchCurrentUserDetail: (id) => dispatch(fetchCurrentUserDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
