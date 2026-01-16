export const saveToken = (token: string) =>
  localStorage.setItem("access_token", token);
export const removeToken = () => localStorage.removeItem("access_token");
export const isAuthenticated = () => !!localStorage.getItem("access_token");
