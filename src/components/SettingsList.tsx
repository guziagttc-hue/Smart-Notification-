import React from 'react';
import { Bell, Moon, Globe, HelpCircle, Info, LogOut, ChevronRight } from 'lucide-react';

export const SettingsList: React.FC = () => {
  return (
    <div className="py-2 space-y-4 font-bengali">
      {/* Profile Card */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#092A54] font-bold text-lg">
          র
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-800">রবিন চৌধুরী</h3>
          <p className="text-[11px] text-gray-400 mt-0.5">robin@example.com</p>
        </div>
        <button className="ml-auto text-xs text-blue-600 font-semibold hover:underline">এডিট</button>
      </div>

      {/* App Settings Group */}
      <div>
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">অ্যাপ কনফিগারেশন</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 overflow-hidden">
          {/* Notifications */}
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#092A54]" />
              <span className="text-sm font-semibold text-gray-800">নোটিফিকেশন ও সাউন্ড</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-[#092A54]" />
              <span className="text-sm font-semibold text-gray-800">ডার্ক মোড</span>
            </div>
            {/* Toggle (simple implementation) */}
            <input type="checkbox" className="w-9 h-5 bg-gray-200 rounded-full appearance-none cursor-pointer checked:bg-[#092A54] transition-all relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:w-4 after:h-4 after:transition-all checked:after:translate-x-4" />
          </div>

          {/* Language */}
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#092A54]" />
              <span className="text-sm font-semibold text-gray-800">ভাষা (Language)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs text-blue-600 font-medium">বাংলা</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Support Group */}
      <div>
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">সহায়তা ও অন্যান্য</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 overflow-hidden">
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-semibold text-gray-800">সাহায্য এবং সাপোর্ট</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-semibold text-gray-800">আমাদের সম্পর্কে</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between p-4 hover:bg-red-50 cursor-pointer transition">
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5 text-red-500" />
              <span className="text-sm font-semibold text-red-500">লগআউট</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
