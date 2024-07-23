import React, { createContext, useContext, useState } from "react";

type AppContextValue = {
  showSidebarMenu: boolean;
  setShowSidebarMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextValue>({} as AppContextValue);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showSidebarMenu, setShowSidebarMenu] = useState(true);

  return (
    <AppContext.Provider value={{ showSidebarMenu, setShowSidebarMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
