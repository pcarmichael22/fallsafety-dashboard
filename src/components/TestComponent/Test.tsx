import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../appContext';

export const Test = () => {
  const testContextContent = useContext(AppContext);
  return (
    <>
      <p>{testContextContent}</p>
    </>
  );
};
