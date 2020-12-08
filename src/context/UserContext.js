/* eslint-disable import/no-anonymous-default-export */
import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export default ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("USER_CONTEXT", user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
