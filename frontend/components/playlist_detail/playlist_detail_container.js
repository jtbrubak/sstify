import { connect } from 'react-redux';
import { fetchPlaylistDetail } from '../../actions/playlist_actions';
import PlaylistDetail from './playlist_detail';

const mapStateToProps = (state, ownProps) => ({
  playlistDetail: state.playlistDetail,
  id: parseInt(ownProps.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylistDetail: (id) => dispatch(fetchPlaylistDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);
