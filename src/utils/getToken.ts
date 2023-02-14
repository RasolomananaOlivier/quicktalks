export const getToken = () => {
  const token = localStorage.getItem("token");

  if (token === null) {
    throw new Error("Token not found");
  }
  return token;
};
