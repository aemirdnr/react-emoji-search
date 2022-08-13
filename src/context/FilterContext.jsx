import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("");

  const values = { filter, setFilter };

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
