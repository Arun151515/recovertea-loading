import React from "react";
import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FAF6EB] text-[#1F1F1F] text-center">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-green-800 tracking-wide">
          RecoverTea
        </h1>
        <p className="text-sm text-green-700 font-medium mt-1 tracking-widest">
          ICED TEA • ICE-COLD RELIEF
        </p>
      </div>

      <div className="flex items-center space-x-3 mb-4">
        <Loader2 className="animate-spin w-6 h-6 text-green-600" />
        <h2 className="text-lg font-semibold text-green-800">
          Steeping recovery...
        </h2>
      </div>

      <p className="mt-2 text-xs text-gray-600 italic">
        A clean start is brewing
      </p>
    </div>
  );
}
