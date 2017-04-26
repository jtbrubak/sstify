import * as APIUtil from '../util/follow_api_util';
import { receiveCurrentUserDetail } from './user_actions';

export const createPlaylistFollow = (data) => dispatch => (
  APIUtil.createPlaylistFollow(data)
  .then(user => dispatch(receiveCurrentUserDetail(user)))
);

export const deletePlaylistFollow = (data) => dispatch => (
  APIUtil.deletePlaylistFollow(data)
  .then(user => dispatch(receiveCurrentUserDetail(user)))
);

export const createUserFollow = (data) => dispatch => (
  APIUtil.createUserFollow(data)
  .then(user => dispatch(receiveCurrentUserDetail(user)))
);

export const deleteUserFollow = (data) => dispatch => (
  APIUtil.deleteUserFollow(data)
  .then(user => dispatch(receiveCurrentUserDetail(user)))
);
