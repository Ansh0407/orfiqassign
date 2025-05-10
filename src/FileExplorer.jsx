import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import Header from "./Header";
import FileTable from "./FileTable";
import GridView from "./GridView";
import filesData from "./data";

const FileExplorer = () => {
  const [files, setFiles] = useState(filesData);
  const { viewMode, sortOption } = useContext(AppContext);

  // Sort files based on selected sort option
  useEffect(() => {
    const sortedFiles = [...filesData];
    
    switch (sortOption) {
      case "name":
        sortedFiles.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "edited":
        sortedFiles.sort((a, b) => {
          // Parse dates for proper comparison
          const dateA = new Date(a.edited.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));
          const dateB = new Date(b.edited.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));
          return dateB - dateA; // Most recent first
        });
        break;
      case "created":
        sortedFiles.sort((a, b) => {
          // Parse dates for proper comparison
          const dateA = new Date(a.created.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));
          const dateB = new Date(b.created.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));
          return dateB - dateA; // Most recent first
        });
        break;
      default:
        break;
    }
    
    setFiles(sortedFiles);
  }, [sortOption]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-4">
        {viewMode === "table" ? (
          <FileTable files={files} />
        ) : (
          <GridView files={files} />
        )}
      </div>
    </div>
  );
};

export default FileExplorer;