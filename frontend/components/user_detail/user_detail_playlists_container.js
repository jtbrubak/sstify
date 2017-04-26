import { connect } from 'react-redux';
import UserDetailPlaylists from './user_detail';

const mapStateToProps = (state, ownProps) => ({
  UserDetail: state.userDetail,
  id: parseInt(ownProps.params.id)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailPlaylists);
