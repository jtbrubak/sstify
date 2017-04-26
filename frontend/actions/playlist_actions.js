import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLIST_DETAIL = "RECEIVE_PLAYLIST_DETAIL";
export const REMOVE_PLAYLIST_TRACK = "REMOVE_PLAYLIST_TRACK";

export const fetchPlaylistDetail = (id) => dispatch => (
  APIUtil.fetchPlaylistDetail(id)
  .then(playlist => dispatch(receivePlaylistDetail(playlist)))
);

export const createPlaylist = playlist => dispatch => (
	APIUtil.createPlaylist(playlist).then(playlist => {
		dispatch(receivePlaylistDetail(playlist));
		return playlist;
	}).fail(err => console.log(err.responseJSON))
);

export const removeTrack = (id) => dispatch => (
  APIUtil.removeTrack(id).then((id) => {
    dispatch(removePlaylistTrack(id));
  })
);

export const deletePlaylist = id => dispatch => (
  APIUtil.deletePlaylist(id)
);

export const addTracksToPlaylist = data => dispatch => (
  APIUtil.addTracksToPlaylist(data).fail(err => console.log(err.responseJSON))
);

export const receivePlaylistDetail = playlist => ({
  type: RECEIVE_PLAYLIST_DETAIL,
  playlist
});

export const removePlaylistTrack = id => ({
  type: REMOVE_PLAYLIST_TRACK,
  id
});
