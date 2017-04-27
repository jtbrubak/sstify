export const search = (data) => {
  return $.ajax({
    method: 'GET',
    url: `/api/search`,
    data
  });
};
