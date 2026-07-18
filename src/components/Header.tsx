import React from 'react';
import { Bell } from 'lucide-react';

export const Header = () => (
  <div className="bg-[#092A54] px-5 pt-8 pb-6 rounded-b-[24px]">
    <div className="flex justify-between items-center text-white mb-4">
      <h1 className="text-xl font-bold tracking-wide font-bengali">স্মার্ট নোটিফিকেশন</h1>
      <div className="relative">
        <Bell className="text-xl" />
        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#092A54]"></span>
      </div>
    </div>
    
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-400">🔍</span>
      </span>
      <input type="text" placeholder="Search" className="w-full bg-[#1b3b64] text-white placeholder-gray-400 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none text-sm font-bengali" />
    </div>
  </div>
);
