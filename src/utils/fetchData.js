export const fetchData = async (user, endpoint) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${user.jwt}`,
    },
  });
  const data = await res.json();
  return data;
};
