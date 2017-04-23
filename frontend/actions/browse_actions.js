import * as APIUtil from '../util/browse_api_util';

export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";

export const receiveAllArtists = artists => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});

export const receiveAllTracks = tracks => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const fetchAllArtists = () => dispatch => (
  APIUtil.fetchAllArtists()
    .then(artists => dispatch(receiveAllArtists(artists)))
);

export const fetchAllAlbums = () => dispatch => (
  APIUtil.fetchAllAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums)))
);

export const fetchAllTracks = () => dispatch => (
  APIUtil.fetchAllTracks()
    .then(tracks => dispatch(receiveAllTracks(tracks)))
);
