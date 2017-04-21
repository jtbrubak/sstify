import * as APIUtil from '../util/artist_api_util';

export const RECEIVE_ARTIST_DETAIL = "RECEIVE_ARTIST_DETAIL";

export const fetchArtistDetail = (id) => dispatch => (
  APIUtil.fetchArtistDetail(id)
  .then(artist => dispatch(receiveArtistDetail(artist)))
);

export const receiveArtistDetail = artist => ({
  type: RECEIVE_ARTIST_DETAIL,
  artist
});
