import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUM_DETAIL = "RECEIVE_ALBUM_DETAIL";

export const fetchAlbumDetail = (id) => dispatch => (
  APIUtil.fetchAlbumDetail(id)
  .then(album => dispatch(receiveAlbumDetail(album)))
);

export const receiveAlbumDetail = album => ({
  type: RECEIVE_ALBUM_DETAIL,
  album
});
