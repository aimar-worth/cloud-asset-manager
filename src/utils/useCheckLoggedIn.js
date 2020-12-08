import { useContext } from "react";

import { UserContext } from "../context/UserContext";

export default function useCheckLoggedIn() {
  const { user, setUser } = useContext(UserContext);
  const data = localStorage.getItem("user");
  if (data) {
    setUser(JSON.parse(data));
  }
  return [user, setUser];
}
