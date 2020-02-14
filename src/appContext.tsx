import React, { useState } from 'react';
import User from './interfaces/User';
import Emergency from './interfaces/Emergency';
import Configs from './interfaces/Configs';
import Org_tree from './interfaces/OrgTree';

interface appState {
  users: User[];
  emergencies: Emergency[];
  configs: Configs[];
  orgtree: Org_tree[];
}

export interface useAppState {
  state: appState;
  setState: React.Dispatch<React.SetStateAction<appState>>;
}

const AppContext = React.createContext<useAppState>({
  state: { users: [], emergencies: [], configs: [], orgtree: [] },
  setState: () => {}
});

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props): JSX.Element => {
  const [state, setState] = useState({
    users: [] as User[],
    emergencies: [] as Emergency[],
    configs: [] as Configs[],
    orgtree: [] as Org_tree[]
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
