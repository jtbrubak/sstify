import { connect } from 'react-redux';
import { fetchPlaylistDetail, deletePlaylist, removeTrack } from '../../actions/playlist_actions';
import { receiveCurrentUser } from '../../actions/session_actions';
import { fetchCurrentUserDetail } from '../../actions/user_actions';
import { createPlaylistFollow, deletePlaylistFollow } from '../../actions/follow_actions';
import { updateNowPlaying } from '../../actions/now_playing_actions';
import PlaylistDetail from './playlist_detail';

const mapStateToProps = (state, ownProps) => ({
  playlistDetail: state.playlistDetail,
  id: parseInt(ownProps.params.id),
  currentUser: state.session.currentUser,
  currentUserDetail: state.currentUserDetail
});

const mapDispatchToProps = (dispatch) => ({
  removeTrack: (data) => dispatch(removeTrack(data)),
  fetchCurrentUserDetail: (id) => dispatch(fetchCurrentUserDetail(id)),
  fetchPlaylistDetail: (id) => dispatch(fetchPlaylistDetail(id)),
  deletePlaylist: (id) => dispatch(deletePlaylist(id)),
  createPlaylistFollow: (data) => dispatch(createPlaylistFollow(data)),
  deletePlaylistFollow: (data) => dispatch(deletePlaylistFollow(data)),
  updateNowPlaying: (tracks) => dispatch(updateNowPlaying(tracks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);
