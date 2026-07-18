/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { QuickAdd } from './components/QuickAdd';
import { ReminderCard } from './components/ReminderCard';
import { BottomNav } from './components/BottomNav';
import { Stethoscope, FileText, ShoppingCart, Plus } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-[#F4F6FA] min-h-dvh flex flex-col justify-between font-bengali">
      
      <Header />

      <div className="flex-1 overflow-y-auto px-4 py-4 pb-24">
        <QuickAdd />

        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3 font-bengali">আসন্ন রিমাইন্ডারসমূহ</h2>
          
          <ReminderCard 
            icon={<Stethoscope className="w-5 h-5" />}
            iconBg="bg-red-100"
            iconColor="text-red-500"
            title="ডাক্তারের সাথে অ্যাপয়েন্টমেন্ট"
            subtitle="Dr. Karim, Dec 21, 10:30 AM"
          />
          <ReminderCard 
            icon={<FileText className="w-5 h-5" />}
            iconBg="bg-amber-100"
            iconColor="text-amber-500"
            title="প্রজেক্ট প্রস্তাবনা জমা"
            subtitle="Dec 23, 4:00 PM"
          />
          <ReminderCard 
            icon={<ShoppingCart className="w-5 h-5" />}
            iconBg="bg-green-100"
            iconColor="text-green-500"
            title="মুদির বাজার"
            subtitle="Rice, Fish <br>Dec 24, 6:00 PM"
          />
        </div>
      </div>

      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <button className="bg-[#092A54] hover:bg-[#0c386e] text-white font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 text-sm whitespace-nowrap border-2 border-white font-bengali">
          <Plus className="w-4 h-4" /> নতুন যুক্ত করুন
        </button>
      </div>

      <BottomNav />
    </div>
  );
}

