import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Playbar from './playbar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  nowPlaying: state.nowPlaying
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);
