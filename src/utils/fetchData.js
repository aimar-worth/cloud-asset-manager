export const fetchData = async (jwt, endpoint) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const data = await res.json();
  return data;
};
