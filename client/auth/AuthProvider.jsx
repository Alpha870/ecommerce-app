import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    // {
    // nombre: "Maria",
    // telefono: 158795,
    // email: "test@test.com",
    // password: "156894",
    // }
  );

  const isLogged = () => user;

  const contextValue = {
    user,
    isLogged,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
