import { connect } from 'react-redux';
import { fetchCurrentUserDetail, fetchUserDetail } from '../../actions/user_actions';
import { createUserFollow, deleteUserFollow } from '../../actions/follow_actions';
import UserDetail from './user_detail';

const mapStateToProps = (state, ownProps) => ({
  currentUserDetail: state.currentUserDetail,
  currentUser: state.session.currentUser,
  userDetail: state.userDetail,
  id: parseInt(ownProps.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUserDetail: (id) => dispatch(fetchCurrentUserDetail(id)),
  fetchUserDetail: (id) => dispatch(fetchUserDetail(id)),
  createUserFollow: (data) => dispatch(createUserFollow(data)),
  deleteUserFollow: (data) => dispatch(deleteUserFollow(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
