import { RECEIVE_ALL_ARTISTS, RECEIVE_ALL_ALBUMS }
 from '../actions/browse_actions';

const defaultState = {
  allArtists: [],
  allAlbums: [],
};

const BrowseReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_ALL_ARTISTS:
      return Object.assign({}, newState, { allArtists: action.artists });
    case RECEIVE_ALL_ALBUMS:
      return Object.assign({}, newState, { allAlbums: action.albums });
    default:
      return state;
  }
};

export default BrowseReducer;
