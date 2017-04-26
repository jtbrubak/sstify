import { RECEIVE_USER_DETAIL } from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_DETAIL:
      return action.user;
    default:
      return state;
  }
};

export default UserReducer;
