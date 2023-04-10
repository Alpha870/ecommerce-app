import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const passeUser = true
  const passeAdmin = true

  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);
  
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
