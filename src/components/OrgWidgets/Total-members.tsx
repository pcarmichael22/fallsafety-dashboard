import React, { useEffect, useState, useContext } from 'react';
import { AppContext, useAppState } from '../../appContext';
import User from '../../interfaces/User';

export const TotalMembers = () => {
  return (
    <>
      <div>
        <h2>2625</h2>
        <h3>Organization Members</h3>
      </div>
    </>
  );
};
