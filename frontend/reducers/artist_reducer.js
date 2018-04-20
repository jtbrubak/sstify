import { RECEIVE_ARTIST_DETAIL } from '../actions/artist_actions';

const artistDefault = {
  name: undefined,
  image_url: undefined,
  albums: []
}

const ArtistReducer = (state = artistDefault, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ARTIST_DETAIL:
      return action.artist;
    default:
      return state;
  }
};

export default ArtistReducer;
