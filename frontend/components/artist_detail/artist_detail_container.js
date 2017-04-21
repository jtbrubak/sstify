import { connect } from 'react-redux';
import { fetchArtistDetail } from '../../actions/artist_actions';
import ArtistDetail from './artist_detail';

const mapStateToProps = (state, ownProps) => ({
  artistDetail: state.artistDetail,
  id: parseInt(ownProps.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtistDetail: (id) => dispatch(fetchArtistDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistDetail);
