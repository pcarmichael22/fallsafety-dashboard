import React, { useEffect, useState, useContext } from 'react';
import { AppContext, useAppState } from '../../appContext';
import User from '../../interfaces/User';

export const TotalHours = () => {
  const { state, setState } = useContext<useAppState>(AppContext);
  let counter = 0;

  state.users.forEach((user: User) => {
    counter += user.monitor_minutes;
  });

  let hours = Math.floor(counter / 60);
  return (
    <>
      <div>
        <h2>{hours.toLocaleString()}</h2>
        <h3>Total Monitoring Hours</h3>
      </div>
    </>
  );
};
