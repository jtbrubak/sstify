import { connect } from 'react-redux';
import { fetchAllAlbums } from '../../actions/browse_actions';
import BrowseAlbums from './browse_albums';

const mapStateToProps = (state) => ({
  allAlbums: state.browse.allAlbums
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllAlbums: () => dispatch(fetchAllAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseAlbums);
