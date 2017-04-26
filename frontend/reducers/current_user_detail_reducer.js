import { RECEIVE_CURRENT_USER_DETAIL } from '../actions/user_actions';

const CurrentUserDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER_DETAIL:
      return action.user;
    default:
      return state;
  }
};

export default CurrentUserDetailReducer;
