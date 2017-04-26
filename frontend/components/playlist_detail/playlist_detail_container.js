import { connect } from 'react-redux';
import { fetchPlaylistDetail, deletePlaylist, removeTrack } from '../../actions/playlist_actions';
import PlaylistDetail from './playlist_detail';

const mapStateToProps = (state, ownProps) => ({
  playlistDetail: state.playlistDetail,
  id: parseInt(ownProps.params.id),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  removeTrack: (data) => dispatch(removeTrack(data)),
  fetchPlaylistDetail: (id) => dispatch(fetchPlaylistDetail(id)),
  deletePlaylist: (id) => dispatch(deletePlaylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);
