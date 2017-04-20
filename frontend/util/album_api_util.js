export const fetchAlbumDetail = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/albums/${id}`
  });
};
