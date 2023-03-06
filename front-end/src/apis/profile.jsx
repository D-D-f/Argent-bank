export const getProfile = async (token) => {
  const requete = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });
  if (requete.ok) {
    const response = await requete.json();
    return response;
  }
};
