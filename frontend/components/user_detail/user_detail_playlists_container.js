import { connect } from 'react-redux';
import { fetchUserDetail } from '../../actions/user_actions';
import UserDetailPlaylists from './user_detail_playlists';

const mapStateToProps = (state, ownProps) => ({
  userDetail: state.userDetail,
  id: parseInt(ownProps.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserDetail: (id) => dispatch(fetchUserDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailPlaylists);
