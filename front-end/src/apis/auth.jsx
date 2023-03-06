export const signin = async (id) => {
  const requete = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });
  const response = await requete.json();
  if (requete.ok) {
    return response;
  } else {
    if (response) {
      throw response;
    } else {
      throw new Error("Oops une erreur est survenue");
    }
  }
};
