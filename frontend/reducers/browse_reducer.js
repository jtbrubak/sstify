import { RECEIVE_ALL_ARTISTS, RECEIVE_ALL_ALBUMS, RECEIVE_ALL_TRACKS }
 from '../actions/browse_actions';

const defaultState = {
  allArtists: [],
  allAlbums: [],
  allTracks: []
};

const BrowseReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_ALL_ARTISTS:
      return Object.assign({}, newState, { allArtists: action.artists });
    case RECEIVE_ALL_ALBUMS:
      return Object.assign({}, newState, { allAlbums: action.albums });
    case RECEIVE_ALL_TRACKS:
      return Object.assign({}, newState, { allTracks: action.tracks });
    default:
      return state;
  }
};

export default BrowseReducer;
