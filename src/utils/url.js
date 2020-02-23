const getUsername = () => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('username');
};

export default {
  getUsername
};
