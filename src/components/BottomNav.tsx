import React from 'react';
import { Bell, CheckSquare, Folder, Settings } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'reminders' | 'tasks' | 'categories' | 'settings';
  onTabChange: (tab: 'reminders' | 'tasks' | 'categories' | 'settings') => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => (
  <div className="bg-white border-t border-gray-100 py-3 px-4 flex justify-between items-center z-10 relative">
    <button onClick={() => onTabChange('reminders')} className={`flex flex-col items-center gap-1 ${activeTab === 'reminders' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
      <Bell className="w-5 h-5" />
      <span className="text-[10px] font-medium font-bengali">Reminders</span>
    </button>
    <button onClick={() => onTabChange('tasks')} className={`flex flex-col items-center gap-1 ${activeTab === 'tasks' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
      <CheckSquare className="w-5 h-5" />
      <span className="text-[10px] font-medium font-bengali">Tasks</span>
    </button>
    <button onClick={() => onTabChange('categories')} className={`flex flex-col items-center gap-1 ${activeTab === 'categories' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
      <Folder className="w-5 h-5" />
      <span className="text-[10px] font-medium font-bengali">Categories</span>
    </button>
    <button onClick={() => onTabChange('settings')} className={`flex flex-col items-center gap-1 ${activeTab === 'settings' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
      <Settings className="w-5 h-5" />
      <span className="text-[10px] font-medium font-bengali">Settings</span>
    </button>
  </div>
);
