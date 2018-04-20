import { RECEIVE_ALBUM_DETAIL } from '../actions/album_actions';

const albumDefault = {
  id: undefined,
  title: undefined,
  year: undefined,
  artist: { id: undefined, name: undefined },
  image_url: undefined,
  tracks: []
}

const AlbumReducer = (state = albumDefault, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUM_DETAIL:
      return action.album;
    default:
      return state;
  }
};

export default AlbumReducer;
