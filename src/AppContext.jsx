import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState("table");
  const [sortOption, setSortOption] = useState("name");

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "table" ? "grid" : "table"));
  };

  const contextValue = React.useMemo(
    () => ({
      viewMode,
      toggleViewMode,
      sortOption,
      setSortOption,
    }),
    [viewMode, sortOption]
  );

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;