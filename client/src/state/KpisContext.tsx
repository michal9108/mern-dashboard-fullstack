// @ts-nocheck
import React, { createContext, useContext, useEffect, useState } from "react";

const KpisContext = createContext();

export const KpisProvider = ({ children }) => {
  const [kpis, setKpis] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://server-dashboard-mern.fly.dev/kpi/kpis");
        const data = await response.json();
        console.log(data);
        setKpis(data);
      } catch (error) {
        setError(error.message, "error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <KpisContext.Provider value={{ kpis, error }}>
      {children}
    </KpisContext.Provider>
  );
};
export const useKpis = () => useContext(KpisContext);
