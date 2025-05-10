import React from "react";
import AppProvider from "./AppContext";
import FileExplorer from "./FileExplorer";
import "./App.css"; // Tailwind CSS should be imported here

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <AppProvider>
        <FileExplorer />
      </AppProvider>
    </div>
  );
}

export default App;
