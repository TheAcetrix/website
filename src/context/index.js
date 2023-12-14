// MyContext.js
import { createContext, useState, useContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [eventsData, setEventsData] = useState([]);

  const values = {
    eventsData,
    setEventsData,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useMyContext = () => useContext(Context);
