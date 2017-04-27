import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const search = (data) => dispatch => (
  APIUtil.search(data).then(results => dispatch(receiveSearchResults(results)))
);

export const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});
