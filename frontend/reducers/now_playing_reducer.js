import { UPDATE_NOW_PLAYING } from '../actions/now_playing_actions';

const NowPlayingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_NOW_PLAYING:
      return action.tracks;
    default:
      return state;
  }
};

export default NowPlayingReducer;
