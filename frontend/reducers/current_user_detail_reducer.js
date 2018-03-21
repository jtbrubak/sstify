import { RECEIVE_CURRENT_USER_DETAIL } from '../actions/user_actions';

const currentUserDefault = {
  playlists: [],
  followed_playlists: [],
  followed_users: []
}

const CurrentUserDetailReducer = (state = currentUserDefault, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER_DETAIL:
      return action.user;
    default:
      return state;
  }
};

export default CurrentUserDetailReducer;
