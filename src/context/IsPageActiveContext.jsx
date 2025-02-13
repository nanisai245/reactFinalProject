import { createContext, useContext, useState } from "react";

const isPageActiveContext = createContext();

export function useIsPageActive() {
  return useContext(isPageActiveContext);
}

export function IsPageActiveProvider({ children }) {
  const [isPageActive, setIsPageActive] = useState(false);

  return (
    <isPageActiveContext.Provider value={{ isPageActive, setIsPageActive }}>
      {children}
    </isPageActiveContext.Provider>
  );
}
