import React from "react";
import { MoreVertical, Folder } from "lucide-react";

const FileTable = ({ files }) => {
  return (
    <div className="bg-white rounded-lg shadow p-0 mt-2">
      <table className="min-w-full">
        <thead>
          <tr className="text-left text-gray-500 text-sm border-b">
            <th className="py-3 px-8 font-medium">Title</th>
            <th className="py-3 px-4 font-medium">Files</th>
            <th className="py-3 px-4 font-medium">Access</th>
            <th className="py-3 px-4 font-medium">Created</th>
            <th className="py-3 px-4 font-medium">Edited</th>
            <th className="py-3 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50 group">
              <td className="py-3 px-8 flex items-center gap-2">
                <Folder className={`w-5 h-5 ${file.color}`} />
                <span>{file.title}</span>
                {file.shared && (
                  <span className="ml-2 text-xs text-gray-400">(Shared)</span>
                )}
              </td>
              <td className="py-3 px-4 text-gray-600">{file.files} Files</td>
              <td className="py-3 px-4 text-gray-600">
                {file.access.includes("Shared") ? (
                  <span>
                    Shared by{" "}
                    <a href="#" className="underline text-blue-600">
                      James Green
                    </a>
                  </span>
                ) : (
                  file.access
                )}
              </td>
              <td className="py-3 px-4 text-gray-600">{file.created}</td>
              <td className="py-3 px-4 text-gray-600">{file.edited}</td>
              <td className="py-3 px-4">
                <MoreVertical className="text-gray-400 cursor-pointer w-5 h-5 group-hover:text-gray-700" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileTable;