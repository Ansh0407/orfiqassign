import React from "react";
import { MoreVertical, Folder } from "lucide-react";

const GridView = ({ files }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {files.map((file, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition group"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <Folder className={`w-6 h-6 flex-shrink-0 ${file.color}`} />
              <div className="min-w-0">
                <div className="font-medium truncate max-w-[10rem]">{file.title}</div>
                <div className="text-xs text-gray-500 whitespace-nowrap">
                  {file.files} Files
                </div>
              </div>
            </div>
            <MoreVertical className="text-gray-400 cursor-pointer w-5 h-5 group-hover:text-gray-700" />
          </div>

          <div className="mt-4 text-xs text-gray-500 space-y-1">
            <div className="flex justify-between gap-2">
              <span>Access:</span>
              <span className="font-medium text-right">
                {file.access.includes("Shared") ? (
                  <>
                    Shared by{" "}
                    <a href="#" className="underline text-blue-600">
                      James Green
                    </a>
                  </>
                ) : (
                  file.access
                )}
              </span>
            </div>
            <div className="flex justify-between gap-2">
              <span>Created:</span>
              <span className="font-medium text-right">{file.created}</span>
            </div>
            <div className="flex justify-between gap-2">
              <span>Edited:</span>
              <span className="font-medium text-right">{file.edited}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
