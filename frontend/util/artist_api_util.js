export const fetchArtistDetail = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/artists/${id}`
  });
};
