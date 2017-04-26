export const fetchUserDetail = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};
