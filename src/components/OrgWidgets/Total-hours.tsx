import React, { useEffect, useState, useContext } from 'react';
import { AppContext, useAppState } from '../../appContext';
import User from '../../interfaces/User';

export const TotalHours = () => {
  return (
    <>
      <div>
        <h2>5,358,961</h2>
        <h3>Total Monitoring Hours</h3>
      </div>
    </>
  );
};
