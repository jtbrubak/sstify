export const createPlaylistFollow = (data) => {
  return $.ajax({
    method: 'POST',
    url: `/api/playlist_follows`,
    data
  });
};

export const deletePlaylistFollow = (data) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlist_follows/1`,
    data
  });
};

export const createUserFollow = (data) => {
  return $.ajax({
    method: 'POST',
    url: `/api/user_follows`,
    data
  });
};

export const deleteUserFollow = (data) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/user_follows/1`,
    data
  });
};
