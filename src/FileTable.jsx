import React from "react";
import {
  MoreVertical,
  Folder,
  FileText,
  File,
  FileCode,
  Image,
  Music,
  Video,
  FileArchive,
} from "lucide-react";

const FileTable = ({ files }) => {
  const getFileIcon = (file) => {
    const type = file.type?.toLowerCase() || "folder";

    switch (type) {
      case "folder":
        return <Folder className={`w-5 h-5 ${file.color || "text-blue-500"}`} />;
      case "note":
        return <FileText className={`w-5 h-5 ${file.color || "text-yellow-500"}`} />;
      case "document":
        return <File className={`w-5 h-5 ${file.color || "text-gray-500"}`} />;
      case "image":
        return <Image className={`w-5 h-5 ${file.color || "text-green-500"}`} />;
      case "code":
        return <FileCode className={`w-5 h-5 ${file.color || "text-purple-500"}`} />;
      case "music":
        return <Music className={`w-5 h-5 ${file.color || "text-red-500"}`} />;
      case "video":
        return <Video className={`w-5 h-5 ${file.color || "text-orange-500"}`} />;
      case "archive":
        return <FileArchive className={`w-5 h-5 ${file.color || "text-gray-600"}`} />;
      default:
        return <File className={`w-5 h-5 ${file.color || "text-gray-500"}`} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow mt-2 overflow-x-auto">
      <table className="min-w-[850px] w-full">
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
              <td className="py-3 px-8 flex items-center gap-2 whitespace-nowrap">
                {getFileIcon(file)}
                <span>{file.title}</span>
                {file.shared && (
                  <span className="ml-2 text-xs text-gray-400">(Shared)</span>
                )}
              </td>
              <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                {file.type === "folder" ? `${file.files} Files` : file.size || "-"}
              </td>
              <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                {file.access?.includes("Shared") ? (
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
              <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                {file.created}
              </td>
              <td className="py-3 px-4 text-gray-600 whitespace-nowrap">
                {file.edited}
              </td>
              <td className="py-3 px-4 whitespace-nowrap">
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
