import React, { useEffect, useState, useContext } from "react";
import { AppContext, useAppState } from "../../appContext";
import User from "../../interfaces/User";

export const Test = () => {
  const { state, setState } = useContext<useAppState>(AppContext);
  const handleClick = () => {
    setState({ users: [{ app_name: "Worker Safety Pro" } as User] });
  };
  console.log("test State:", state);
  return (
    <>
      <button onClick={handleClick}>click me</button>
      <p>{state.users.toString()}</p>
    </>
  );
};
