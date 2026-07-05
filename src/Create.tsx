import React from 'react';
import { ArrowLeft, RefreshCcw, Zap, Music, Image as ImageIcon } from 'lucide-react';

export default function Create({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-full w-full bg-black text-white flex flex-col relative overflow-hidden pb-[56px]">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-4 pb-6 z-20 absolute top-0 w-full pointer-events-auto">
        <ArrowLeft size={24} className="cursor-pointer drop-shadow-md" onClick={onBack} />
        <div className="flex items-center gap-2 font-bold text-lg cursor-pointer drop-shadow-md bg-black/40 px-3 py-1 rounded-full">
          <Music size={16} />
          Add sound
        </div>
        <div className="w-6 h-6"></div>
      </div>

      {/* Camera View - True Black/Camera background, no gradient */}
      <div className="flex-1 bg-transparent relative">
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Right Sidebar Tools */}
        <div className="absolute right-4 top-24 flex flex-col gap-6 items-center z-10">
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="bg-black/30 p-3 rounded-full backdrop-blur-md">
              <RefreshCcw size={28} className="text-white" />
            </div>
            <span className="text-[10px] font-semibold drop-shadow-md">Flip</span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="bg-black/30 p-3 rounded-full backdrop-blur-md">
              <Zap size={28} className="text-white" />
            </div>
            <span className="text-[10px] font-semibold drop-shadow-md">Flash</span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="bg-black/30 p-3 rounded-full backdrop-blur-md">
              <ImageIcon size={28} className="text-white" />
            </div>
            <span className="text-[10px] font-semibold drop-shadow-md">Upload</span>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-[80px] left-0 w-full flex flex-col items-center z-10 px-6">
          <div className="flex justify-center w-full mb-8 items-end">
            <div className="w-20 h-20 rounded-full border-[4px] border-white flex items-center justify-center p-1 cursor-pointer">
               <div className="w-full h-full bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
