import { RECEIVE_PLAYLIST_DETAIL, REMOVE_PLAYLIST_TRACK } from '../actions/playlist_actions';

const playlistDefault = {
  tracks: [],
  user: { id: undefined, username: undefined }
}

const PlaylistReducer = (state = playlistDefault, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLAYLIST_DETAIL:
      return action.playlist;
    case REMOVE_PLAYLIST_TRACK:
      const tracks = Object.assign({}, state).tracks.filter(track => track.id != action.id);
      return Object.assign({}, state, { tracks });
    default:
      return state;
  }
};

export default PlaylistReducer;
