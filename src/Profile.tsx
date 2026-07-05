import React, { useState, useRef } from 'react';
import { User, ArrowLeft, ChevronDown, MoreHorizontal, Grid3X3, Lock, Bookmark, Heart, Play } from 'lucide-react';

export default function Profile({ onBack, onMenu }: { onBack: () => void, onMenu?: () => void }) {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentScrollY = e.currentTarget.scrollTop;
    if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
      setShowHeader(false);
    } else if (currentScrollY < lastScrollY.current) {
      setShowHeader(true);
    }
    lastScrollY.current = currentScrollY;
  };

  return (
    <div className="h-full w-full bg-white dark:bg-black text-black dark:text-white flex flex-col overflow-y-auto pb-[56px]" onScroll={handleScroll}>
      {/* Header */}
      <div 
        className={`flex justify-between items-center px-4 pt-4 pb-4 bg-white dark:bg-black z-20 fixed top-0 w-full md:max-w-md pointer-events-auto transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <ArrowLeft size={24} className="cursor-pointer" onClick={onBack} />
        <div className="flex items-center gap-1 font-bold text-lg cursor-pointer">
          tanzania_vibes
          <ChevronDown size={20} />
        </div>
        <MoreHorizontal size={24} className="cursor-pointer" onClick={onMenu} />
      </div>

      <div className="flex flex-col px-4 pt-[59px] pb-0">
        {/* Avatar and Name */}
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 shrink-0">
            <User size={40} className="text-gray-500 dark:text-gray-400" />
          </div>
          <div className="flex flex-col pt-2">
            <h2 className="text-xl font-bold leading-tight">Tanzania Vibes</h2>
            <span className="text-gray-600 dark:text-gray-400 font-medium">@tanzania_vibes</span>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-2 text-sm font-medium">
          Kila kitu kama kilivyo! 🇹🇿 #tiktok #tanzania<br />
          Karibu kwenye vibes za bongo.
        </div>

        {/* Count status */}
        <div className="flex gap-6 mt-2 mb-2">
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">120</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">1.5M</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">14M</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Likes</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 w-full">
          <button className="flex-1 bg-transparent text-black dark:text-white py-2 rounded-lg border border-gray-300 dark:border-gray-600 font-semibold text-base">Follow</button>
          <button className="flex-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-2 rounded-lg border border-gray-300 dark:border-gray-600 font-semibold text-base">Message</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-around items-center border-b border-gray-200 dark:border-gray-800 mt-4">
        <div className="flex-1 flex justify-center py-3 border-b-2 border-black dark:border-white">
          <Grid3X3 size={24} className="text-black dark:text-white" />
        </div>
        <div className="flex-1 flex justify-center py-3">
          <Lock size={24} className="text-gray-400" />
        </div>
        <div className="flex-1 flex justify-center py-3">
          <Bookmark size={24} className="text-gray-400" />
        </div>
        <div className="flex-1 flex justify-center py-3">
          <Heart size={24} className="text-gray-400" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-[1px] bg-gray-200 dark:bg-gray-800 pb-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="aspect-[3/4] bg-gray-300 dark:bg-gray-900 relative">
            <div className="absolute bottom-1 left-1 flex items-center gap-1 text-white text-xs font-semibold drop-shadow-md">
              <Play size={12} fill="white" />
              {(Math.random() * 100).toFixed(1)}K
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
