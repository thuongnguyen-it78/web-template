import { createContext, useState } from "react";

export const SystemContext = createContext();

export const SystemProvider = ({ children }) => {
  const [system, setSystem] = useState({
    globalLoading: false,
  });

  const handleSystemChange = (value) => {
    setSystem({ ...system, ...value });
  };

  return (
    <SystemContext.Provider
      value={{ ...system, onSystemChange: handleSystemChange }}
    >
      {children}
    </SystemContext.Provider>
  );
};
