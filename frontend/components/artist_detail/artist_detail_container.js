import { connect } from 'react-redux';
import { fetchArtistDetail } from '../../actions/artist_actions';
import { updateNowPlaying } from '../../actions/now_playing_actions';
import ArtistDetail from './artist_detail';

const mapStateToProps = (state, ownProps) => ({
  artistDetail: state.artistDetail,
  id: parseInt(ownProps.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtistDetail: (id) => dispatch(fetchArtistDetail(id)),
  updateNowPlaying: (tracks) => dispatch(updateNowPlaying(tracks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistDetail);
