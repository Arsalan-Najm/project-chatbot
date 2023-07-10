'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages,setTotalPages] = useState(0)
  return (
    <AppContext.Provider value={{ toggle, setToggle, data, setData, page, setPage, loading, setLoading,totalPages,setTotalPages }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
