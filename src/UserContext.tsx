import React, { useState, useContext } from "react";
import { User } from "./models/User";

export interface UserContext {
  user?: User;
  setUser: (user: User) => void;
  resetContext: () => void;
}

const UserAppContext = React.createContext<UserContext>({
  resetContext: () => {},
  setUser: (user: User) => {},
});

export function useUserContext() {
  return useContext(UserAppContext);
}

export function UserProvider({ children }: any) {
  const [user, setUser] = useState<User | undefined>(undefined);

  function resetContext() {
    setUser(undefined);
  }

  return (
    <UserAppContext.Provider
      value={{
        user,
        setUser,
        resetContext,
      }}
    >
      {children}
    </UserAppContext.Provider>
  );
}
