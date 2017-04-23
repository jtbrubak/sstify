import { connect } from 'react-redux';
import { fetchAllArtists } from '../../actions/browse_actions';
import BrowseArtists from './browse_artists';

const mapStateToProps = (state) => ({
  allArtists: state.browse.allArtists
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllArtists: () => dispatch(fetchAllArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseArtists);
