import React, { useEffect, useState, useContext } from 'react';
import { AppContext, useAppState } from '../../appContext';
import User from '../../interfaces/User';
import { MemberTable } from '../org-members-table/Org-member-table';
import { userInfo } from 'os';

export const DaysSinceAlarm = () => {
  const { state, setState } = useContext<useAppState>(AppContext);
  let minDay;

  let maxLastEmergencyUser = state.users.reduce(
    (a, b) => ((a.last_emergency || 0) > (b.last_emergency || 0) ? a : b),
    {} as User
  );

  if (maxLastEmergencyUser.last_emergency > 0) {
    minDay = maxLastEmergencyUser.last_emergency.toString();
  } else {
    minDay = '—';
  }

  return (
    <>
      <div>
        <h2>{minDay}</h2>
        <h3>Total Monitoring Hours</h3>
      </div>
    </>
  );
};
