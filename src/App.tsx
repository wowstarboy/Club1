/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Music, Home, Search as SearchIcon, Plus, Inbox, User, Tv2, Send } from "lucide-react";
import Profile from './Profile';
import Search from './Search';
import Create from './Create';
import Menu from './Menu';

interface VideoData {
  id: number;
  user: string;
  desc: string;
  likes: string;
  comments: string;
  shares: string;
  saves: string;
  song: string;
  color: string;
}

const VIDEOS: VideoData[] = [
  { 
    id: 1, 
    user: "@tanzania_vibes", 
    desc: "Kila kitu kama kilivyo! #tiktok #tanzania", 
    likes: "1.2M", 
    comments: "450", 
    shares: "12K", 
    saves: "4K",
    song: "Original Sound - Bongo Flava",
    color: "from-blue-900 to-black"
  },
  { 
    id: 2, 
    user: "@developer_sam", 
    desc: "Tengeneza page kama ya tiktok. Acha kila kitu kama kilivyo! #coding #react", 
    likes: "500K", 
    comments: "120", 
    shares: "3K", 
    saves: "1K",
    song: "Tech Vibes - Developer Sam",
    color: "from-green-900 to-black"
  },
  { 
    id: 3, 
    user: "@comedy_hub", 
    desc: "Usiwe serious sana 😂 #vichekesho", 
    likes: "2.1M", 
    comments: "8K", 
    shares: "45K", 
    saves: "12K",
    song: "Funny laugh - Comedy Hub",
    color: "from-purple-900 to-black"
  }
];

function VideoItem({ data }: { data: VideoData; key?: React.Key }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="h-full w-full snap-start relative flex justify-center items-center bg-gray-950 overflow-hidden shrink-0">
      {/* Video Background Placeholder */}
      <div className={`absolute inset-0 bg-gradient-to-b ${data.color} opacity-80`}></div>
      <Tv2 size={120} className="text-white/10" />

      {/* Right Actions */}
      <div className="absolute bottom-20 right-4 flex flex-col items-center gap-6 z-10">
        <div className="relative">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-white overflow-hidden">
            <User size={30} className="text-gray-400" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs font-bold border-2 border-black">
            +
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => setLiked(!liked)}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <Heart size={32} className={liked ? "text-red-500" : "text-white"} fill={liked ? "#ef4444" : "transparent"} />
          </div>
          <span className="text-xs font-semibold drop-shadow-md">{data.likes}</span>
        </div>
        
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <MessageCircle size={32} className="text-white" />
          </div>
          <span className="text-xs font-semibold drop-shadow-md">{data.comments}</span>
        </div>

        <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => setSaved(!saved)}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <Bookmark size={32} className={saved ? "text-yellow-400" : "text-white"} fill={saved ? "#facc15" : "transparent"} />
          </div>
          <span className="text-xs font-semibold drop-shadow-md">{data.saves}</span>
        </div>

        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <Send size={32} className="text-white" />
          </div>
          <span className="text-xs font-semibold drop-shadow-md">{data.shares}</span>
        </div>

        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mt-2 animate-spin-slow border-[12px] border-black overflow-hidden relative">
           <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-500 rounded-full flex items-center justify-center">
             <Music size={12} className="text-white" />
           </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-20 left-4 flex flex-col gap-3 z-10 w-[75%]">
        <h3 className="font-bold text-lg drop-shadow-md">{data.user}</h3>
        <p className="text-sm drop-shadow-md leading-tight">{data.desc}</p>
        <div className="flex items-center gap-2 mt-1 text-sm">
          <Music size={16} className="shrink-0" />
          <div className="marquee-container">
            <span className="marquee-text font-medium">{data.song}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      setActiveTab(e.state?.tab || 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    window.history.pushState({ tab }, '');
  };

  return (
    <div className="bg-black h-[100dvh] w-full sm:w-full md:max-w-md md:mx-auto text-white relative overflow-hidden flex flex-col font-sans select-none">
      {activeTab === 'home' && (
        <>
          {/* Top Nav */}
          <div className="absolute top-0 pt-4 pb-4 w-full flex justify-between items-center px-4 z-20 bg-gradient-to-b from-black/60 to-transparent">
             <div className="flex flex-col gap-[5px] cursor-pointer drop-shadow-md">
               <div className="w-6 h-[2.5px] bg-white rounded-full"></div>
               <div className="w-4 h-[2.5px] bg-white rounded-full"></div>
             </div>
             <div className="flex gap-4 items-center drop-shadow-md">
               <span className="text-gray-300 font-semibold text-lg cursor-pointer hover:text-white transition-colors">Following</span>
               <div className="w-[1px] h-4 bg-gray-500 rounded-full"></div>
               <div className="flex flex-col items-center">
                 <span className="text-white font-bold text-lg cursor-pointer">For You</span>
                 <div className="w-8 h-1 bg-white rounded-full mt-1"></div>
               </div>
             </div>
             <SearchIcon size={26} className="drop-shadow-md cursor-pointer" onClick={() => navigateTo('search')} />
          </div>

          {/* Feed */}
          <div className="flex-1 h-[100dvh] overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
             {VIDEOS.map(v => <VideoItem key={v.id} data={v} />)}
          </div>
        </>
      )}

      {activeTab === 'profile' && <Profile onBack={() => navigateTo('home')} onMenu={() => navigateTo('menu')} />}
      {activeTab === 'search' && <Search onBack={() => navigateTo('home')} />}
      {activeTab === 'create' && <Create onBack={() => navigateTo('home')} />}
      {activeTab === 'menu' && <Menu onBack={() => navigateTo('profile')} />}

      {/* Bottom Nav */}
      <div className={`h-[56px] w-full flex justify-around items-center px-2 z-20 absolute bottom-0 pointer-events-auto ${
        activeTab === 'home' || activeTab === 'create'
          ? 'bg-gradient-to-t from-black/90 to-transparent text-white'
          : 'bg-white dark:bg-black shadow-[0_-4px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_10px_rgba(0,0,0,0.5)] text-black dark:text-white'
      }`}>
         <div className="flex flex-col items-center gap-1 cursor-pointer transition-opacity" onClick={() => navigateTo('home')}>
           <Home size={24} className={activeTab === 'home' ? '' : 'text-gray-400'} fill={activeTab === 'home' ? "currentColor" : "transparent"} />
         </div>
         <div className="flex flex-col items-center gap-1 cursor-pointer transition-opacity" onClick={() => navigateTo('search')}>
           <SearchIcon size={24} className={activeTab === 'search' ? '' : 'text-gray-400'} strokeWidth={activeTab === 'search' ? 3 : 2.5} />
         </div>
         <div className="flex flex-col items-center gap-1 cursor-pointer transition-opacity" onClick={() => navigateTo('create')}>
           <Plus size={30} className={activeTab === 'create' ? '' : 'text-gray-400'} strokeWidth={2.5} />
         </div>
         <div className="flex flex-col items-center gap-1 cursor-pointer transition-opacity" onClick={() => navigateTo('inbox')}>
           <MessageCircle size={24} className={activeTab === 'inbox' ? '' : 'text-gray-400'} strokeWidth={activeTab === 'inbox' ? 3 : 2.5} fill={activeTab === 'inbox' ? "currentColor" : "transparent"} />
         </div>
         <div className="flex flex-col items-center gap-1 cursor-pointer transition-opacity" onClick={() => navigateTo('profile')}>
           <User size={24} className={activeTab === 'profile' ? '' : 'text-gray-400'} strokeWidth={activeTab === 'profile' ? 3 : 2.5} fill={activeTab === 'profile' ? "currentColor" : "transparent"} />
         </div>
      </div>
    </div>
  );
}
