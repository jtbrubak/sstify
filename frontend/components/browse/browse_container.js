import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Browse from './browse';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
