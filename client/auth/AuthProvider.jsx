import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const [admin, setAdmin] = useState(false);

  const isAdmin = () => {
    if (user.password === import.meta.env.VITE_ADMIN_PASS) {
      setAdmin(true);
    }
  };
  const isLogged = () => user;

  const contextValue = {
    user,
    admin,
    setUser,
    isLogged,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
