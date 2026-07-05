import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Search({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-full w-full bg-white dark:bg-black text-black dark:text-white flex flex-col relative">
      <div className="flex items-center gap-4 px-4 pt-4 pb-8 bg-gradient-to-b from-white/90 to-transparent dark:from-black/90 dark:to-transparent z-20 absolute top-0 w-full pointer-events-auto">
        <ArrowLeft size={24} className="cursor-pointer shrink-0" onClick={onBack} />
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-gray-200 dark:bg-gray-800 outline-none border-none flex-1 text-lg placeholder:text-gray-500 rounded-full px-4 py-2"
        />
      </div>
      <div className="flex-1 pt-24 px-4 pb-[56px]">
        {/* Search Content */}
      </div>
    </div>
  );
}
