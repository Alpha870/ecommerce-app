import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const passeAdmin = true

  const [user, setUser] = useState(passeAdmin);

  const [admin, setAdmin] = useState(passeAdmin);
  const isLogged = () => user;

  const contextValue = {
    user,
    setUser,
    admin,
    setAdmin,
    isLogged,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
