import { connect } from 'react-redux';
import { fetchUserDetail } from '../../actions/user_actions';
import UserDetailFollowedPlaylists from './user_detail';

const mapStateToProps = (state, ownProps) => ({
  UserDetail: state.userDetail,
  id: parseInt(ownProps.params.id)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailFollowedPlaylists);
