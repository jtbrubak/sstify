import { connect } from 'react-redux';
import { fetchAlbumDetail } from '../../actions/album_actions';
import AlbumDetail from './album_detail';

const mapStateToProps = (state, ownProps) => ({
  albumDetail: state.albumDetail,
  id: ownProps.params.id
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbumDetail: (id) => dispatch(fetchAlbumDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetail);
