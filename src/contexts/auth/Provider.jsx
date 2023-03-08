import { useState } from "react";
import { UserContext } from "./authContext";

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogIn = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const onLogOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, onLogIn, onLogOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
