import { RECEIVE_ARTIST_DETAIL } from '../actions/artist_actions';

const ArtistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ARTIST_DETAIL:
      return action.artist;
    default:
      return state;
  }
};

export default ArtistReducer;
