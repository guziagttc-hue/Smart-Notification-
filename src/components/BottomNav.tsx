import React from 'react';
import { Bell, CheckSquare, Folder, Settings } from 'lucide-react';

export const BottomNav = () => (
  <div className="bg-white border-t border-gray-100 py-3 px-4 flex justify-between items-center z-10 relative">
    <button className="flex flex-col items-center gap-1 text-blue-600">
      <Bell className="w-5 h-5" />
      <span className="text-[10px] font-medium font-bengali">Reminders</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
      <CheckSquare className="w-5 h-5" />
      <span className="text-[10px] font-medium font-bengali">Tasks</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
      <Folder className="w-5 h-5" />
      <span className="text-[10px] font-medium font-bengali">Categories</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
      <Settings className="w-5 h-5" />
      <span className="text-[10px] font-medium font-bengali">Settings</span>
    </button>
  </div>
);
