import { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";

export default function AddNewMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow transition"
      >
        <FiPlus />
        Add New
      </button>
      
      {open && (
        <div className="absolute left-0 mt-2 w-40 rounded-xl shadow-xl z-20 overflow-hidden bg-gradient-to-b from-blue-600 to-purple-600 text-white">
          <ul className="text-sm">
            <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">📁 Folder</li>
            <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">📄 File</li>
            <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">📝 Note</li>
          </ul>
        </div>
      )}
    </div>
  );
}