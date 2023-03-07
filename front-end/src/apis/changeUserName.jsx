export const changeUserName = async (username, token) => {
  const requete = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(username),
  });
  if (requete.ok) {
    const response = await requete.json();
    return response;
  }
};
