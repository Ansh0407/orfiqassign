import React from "react";
import AppProvider from "./AppContext";
import FileExplorer from "./FileExplorer";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <FileExplorer />
    </AppProvider>
  );
}

export default App;