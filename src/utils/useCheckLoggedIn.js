export default function useCheckLoggedIn() {
  const user = localStorage.getItem("user");

  if (!user) return false;
  return true;
}
