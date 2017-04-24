import { RECEIVE_PLAYLIST_DETAIL } from '../actions/playlist_actions';

const PlaylistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLAYLIST_DETAIL:
      return action.playlist;
    default:
      return state;
  }
};

export default PlaylistReducer;
