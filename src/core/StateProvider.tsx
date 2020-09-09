import React, { createContext, useReducer, useContext } from "react";
import { reducer, StateDispatch, initState } from "./reducer";

interface IStateProvier {
  children: React.ReactNode;
}

export const StateContext = createContext<StateDispatch | undefined>(undefined);

export const StateProvider = ({ children }: IStateProvier) => (
  <StateContext.Provider value={useReducer(reducer, initState)[1]}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
