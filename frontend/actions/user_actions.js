import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER_DETAIL = "RECEIVE_USER_DETAIL";
export const RECEIVE_CURRENT_USER_DETAIL = "RECEIVE_CURRENT_USER_DETAIL";

export const receiveUserDetail = user => ({
  type: RECEIVE_USER_DETAIL,
  user
});

export const receiveCurrentUserDetail = user => ({
  type: RECEIVE_CURRENT_USER_DETAIL,
  user
});

export const fetchUserDetail = (id) => dispatch => (
  APIUtil.fetchUserDetail(id)
    .then(user => dispatch(receiveUserDetail(user)))
);

export const fetchCurrentUserDetail = (id) => dispatch => (
  APIUtil.fetchUserDetail(id)
    .then(user => dispatch(receiveCurrentUserDetail(user)))
);
