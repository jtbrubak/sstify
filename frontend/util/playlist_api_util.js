export const createPlaylist = (data) => {
  return $.ajax({
    method: 'POST',
    url: `/api/playlists`,
    data
  });
};

export const fetchPlaylistDetail = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlists/${id}`
  });
};

export const addTracksToPlaylist = (data) => {
  return $.ajax({
    method: 'POST',
    url: `/api/playlist_tracks`,
    data
  });
};

export const deletePlaylist = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${id}`
  });
};
