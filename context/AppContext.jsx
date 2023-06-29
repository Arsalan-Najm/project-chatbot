'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState();
  return <AppContext.Provider value={{ toggle, setToggle, data, setData }}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
