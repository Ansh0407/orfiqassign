import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import Header from "./Header";
import FileTable from "./FileTable";
import GridView from "./GridView";
import filesData from "./data";
import StorageBar from "./StorageBar";
import AddNewMenu from "./AddNewMenu";
import Sidebar from "./Sidebar";

const FileExplorer = () => {
  const [files, setFiles] = useState(filesData);
  const { viewMode, sortOption } = useContext(AppContext);

  useEffect(() => {
    const sortedFiles = [...filesData];

    switch (sortOption) {
      case "name":
        sortedFiles.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "edited":
        sortedFiles.sort((a, b) => {
          const dateA = new Date(a.edited.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));
          const dateB = new Date(b.edited.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));
          return dateB - dateA;
        });
        break;
      case "created":
        sortedFiles.sort((a, b) => {
          const dateA = new Date(a.created.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));
          const dateB = new Date(b.created.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));
          return dateB - dateA;
        });
        break;
      default:
        break;
    }

    setFiles(sortedFiles);
  }, [sortOption]);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col px-4">
        <Header />
        
        <div className="flex justify-between items-center my-4">
          <AddNewMenu />
          <StorageBar />
        </div>
        
        <div className="flex-1 overflow-auto">
          {viewMode === "table" ? (
            <FileTable files={files} />
          ) : (
            <GridView files={files} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;