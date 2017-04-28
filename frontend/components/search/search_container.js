import { connect } from 'react-redux';
import Search from './search';
import { search } from '../../actions/search_actions';
import { updateNowPlaying } from '../../actions/now_playing_actions';

const mapStateToProps = (state) => ({
  searchResults: state.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  search: (data) => dispatch(search(data)),
  updateNowPlaying: (tracks) => dispatch(updateNowPlaying(tracks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
