import React, { useState } from 'react';
import { ChevronLeft, Sparkles, UserCircle, Bookmark, ShieldCheck, Ban, Moon, Info, Shield, FileText, Users, Flag, Mail, LogOut, PlusCircle } from 'lucide-react';

export default function Menu({ onBack }: { onBack: () => void }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="h-full w-full bg-white dark:bg-black text-black dark:text-white flex flex-col relative overflow-hidden pb-[56px]">
      {/* Header with Shadow */}
      <div className="flex items-center px-4 py-4 bg-white dark:bg-black z-20 absolute top-0 w-full pointer-events-auto shadow-md">
        <ChevronLeft size={28} className="cursor-pointer" onClick={onBack} />
        <h1 className="text-xl font-bold ml-4">Menu</h1>
      </div>

      <div className="flex-1 overflow-y-auto pt-[68px] pb-4">
        <SectionHeader title="Account" />
        <MenuItem icon={<Sparkles size={24} />} title="JamiiAi" />
        <MenuItem icon={<UserCircle size={24} />} title="Profile Management" />
        <MenuItem icon={<Bookmark size={24} />} title="Saved" />
        <MenuItem icon={<ShieldCheck size={24} />} title="Request Verification" />
        <MenuItem icon={<Ban size={24} />} title="Blocks" />
        
        <Divider />
        <SectionHeader title="Preferences" />
        <div className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors" onClick={() => setIsDarkMode(!isDarkMode)}>
          <div className="flex items-center gap-4">
            <Moon size={24} />
            <span className="text-base font-medium">Dark Mode</span>
          </div>
          {/* Simple toggle switch */}
          <div className={`w-12 h-6 rounded-full p-1 transition-colors ${isDarkMode ? 'bg-blue-500' : 'bg-gray-300'}`}>
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </div>
        </div>

        <Divider />
        <SectionHeader title="About & Support" />
        <MenuItem icon={<Info size={24} />} title="About" />
        <MenuItem icon={<Shield size={24} />} title="Privacy" />
        <MenuItem icon={<FileText size={24} />} title="Terms" />
        <MenuItem icon={<Users size={24} />} title="Community Standards" />
        <MenuItem icon={<Flag size={24} />} title="Report an Issue" />
        <MenuItem icon={<Mail size={24} />} title="Contact" />

        <Divider />
        <SectionHeader title="Login" />
        <MenuItem icon={<LogOut size={24} />} title="Log Out" color="text-red-500" />
        <MenuItem icon={<PlusCircle size={24} />} title="Add Account" color="text-blue-500" />
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="px-4 py-2 mt-2">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
    </div>
  );
}

function MenuItem({ icon, title, color = "" }: { icon: React.ReactNode, title: string, color?: string }) {
  return (
    <div className={`flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors ${color}`}>
      {icon}
      <span className="text-base font-medium">{title}</span>
    </div>
  );
}
function Divider() {
  return <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-800 my-2"></div>;
}
