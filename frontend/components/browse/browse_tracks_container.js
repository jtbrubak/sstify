import { connect } from 'react-redux';
import { fetchAllTracks } from '../../actions/browse_actions';
import BrowseTracks from './browse_tracks';

const mapStateToProps = (state) => ({
  allTracks: state.browse.allTracks
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseTracks);
