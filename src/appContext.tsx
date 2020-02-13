import React, { useState } from 'react';
import User from './interfaces/User';
import Emergency from './interfaces/Emergency';
import Configs from './interfaces/Configs';

interface appState {
  users: User[];
  emergencies: Emergency[];
  configs: Configs[];
}

export interface useAppState {
  state: appState;
  setState: React.Dispatch<React.SetStateAction<appState>>;
}

const AppContext = React.createContext<useAppState>({
  state: { users: [], emergencies: [], configs: [] },
  setState: () => {}
});

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props): JSX.Element => {
  const [state, setState] = useState({
    users: [] as User[],
    emergencies: [] as Emergency[],
    configs: [] as Configs[]
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
