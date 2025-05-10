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
    const parseDate = (str) => new Date(str.replace(/(\w{3}) (\d+), (\d{4})/, "$2 $1 $3"));

    if (sortOption === "name") {
      sortedFiles.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sortedFiles.sort((a, b) => parseDate(b[sortOption]) - parseDate(a[sortOption]));
    }

    setFiles(sortedFiles);
  }, [sortOption]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Top action bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-2">
  <AddNewMenu />
  <StorageBar />
</div>


        {/* Main file content */}
        <div className="flex-1 overflow-auto px-4 pb-4">
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
