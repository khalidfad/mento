"use client";

import { createContext, useContext, useState } from "react";

interface AppContextValue {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const defaultState: AppContextValue = {
  menuOpen: false,
  setMenuOpen: () => {},
};

const AppContext = createContext<AppContextValue>(defaultState);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
