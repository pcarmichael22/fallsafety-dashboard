import React, { useState } from "react";
import User from "./interfaces/User";

interface appState {
  users: User[];
}

export interface useAppState {
  state: appState;
  setState: React.Dispatch<React.SetStateAction<appState>>;
}

const AppContext = React.createContext<useAppState | null>(null);

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props): JSX.Element => {
  const [state, setState] = useState({ users: [] as User[] });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
