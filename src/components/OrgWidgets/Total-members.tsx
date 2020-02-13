import React, { useEffect, useState, useContext } from 'react';
import { AppContext, useAppState } from '../../appContext';
import User from '../../interfaces/User';

export const TotalMembers = () => {
  const { state, setState } = useContext<useAppState>(AppContext);
  let counter = 0;

  state.users.forEach((user: User) => {
    counter++;
  });
  let members = counter;
  return (
    <>
      <div>
        <h2>{members}</h2>
        <h3>Organization Members</h3>
      </div>
    </>
  );
};
