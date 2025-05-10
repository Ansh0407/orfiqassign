export default function StorageBar() {
  return (
    <div className="flex items-center justify-between px-8 py-3 bg-white border-b shadow-sm">

      <div className="flex items-center gap-2">
        <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-2 bg-green-400 rounded" style={{ width: "37%" }}></div>
        </div>
        <span className="text-xs text-gray-500 whitespace-nowrap">
          1.85 of 5 GB used
        </span>
      </div>
    </div>
  );
}