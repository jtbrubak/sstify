import { connect } from 'react-redux';
import { fetchAlbumDetail } from '../../actions/album_actions';
import { addTracksToPlaylist } from '../../actions/playlist_actions';
import { updateNowPlaying } from '../../actions/now_playing_actions';
import AlbumDetail from './album_detail';

const mapStateToProps = (state, ownProps) => ({
  albumDetail: state.albumDetail,
  id: parseInt(ownProps.params.id),
  currentUser: state.session.currentUser,
  currentUserDetail: state.currentUserDetail
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbumDetail: (id) => dispatch(fetchAlbumDetail(id)),
  updateNowPlaying: (tracks) => dispatch(updateNowPlaying(tracks)),
  addTracksToPlaylist: (data) => dispatch(addTracksToPlaylist(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetail);
