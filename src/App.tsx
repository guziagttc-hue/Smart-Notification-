/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { QuickAdd } from './components/QuickAdd';
import { ReminderCard } from './components/ReminderCard';
import { BottomNav } from './components/BottomNav';
import { Stethoscope, FileText, ShoppingCart, Plus } from 'lucide-react';
import { Reminder } from './types';

export default function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: '1', title: "ডাক্তারের সাথে অ্যাপয়েন্টমেন্ট", subtitle: "Dr. Karim, Dec 21, 10:30 AM", icon: 'medical' },
    { id: '2', title: "প্রজেক্ট প্রস্তাবনা জমা", subtitle: "Dec 23, 4:00 PM", icon: 'file' },
    { id: '3', title: "মুদির বাজার", subtitle: "Rice, Fish <br>Dec 24, 6:00 PM", icon: 'cart' },
  ]);

  const addReminder = (text: string) => {
    const newReminder: Reminder = {
      id: Date.now().toString(),
      title: text,
      subtitle: "নতুন কাজ",
      icon: 'file',
    };
    setReminders([newReminder, ...reminders]);
  };

  const getIcon = (type: string) => {
    switch(type) {
        case 'medical': return <Stethoscope className="w-5 h-5" />;
        case 'cart': return <ShoppingCart className="w-5 h-5" />;
        default: return <FileText className="w-5 h-5" />;
    }
  }

  const getBgColor = (type: string) => {
    switch(type) {
        case 'medical': return 'bg-red-100';
        case 'cart': return 'bg-green-100';
        default: return 'bg-amber-100';
    }
  }

  const getColor = (type: string) => {
    switch(type) {
        case 'medical': return 'text-red-500';
        case 'cart': return 'text-green-500';
        default: return 'text-amber-500';
    }
  }

  return (
    <div className="bg-gray-100 min-h-dvh flex items-center justify-center sm:p-4 font-bengali">
      <div className="relative w-full h-dvh sm:h-[844px] sm:max-w-[390px] bg-[#F4F6FA] flex flex-col shadow-2xl overflow-hidden sm:rounded-[40px]">
        
        <Header />

        <div className="flex-1 overflow-y-auto px-4 py-4 pb-24">
          <QuickAdd onAdd={addReminder} />

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3 font-bengali">আসন্ন রিমাইন্ডারসমূহ</h2>
            
            {reminders.map(r => (
              <ReminderCard 
                key={r.id}
                icon={getIcon(r.icon)}
                iconBg={getBgColor(r.icon)}
                iconColor={getColor(r.icon)}
                title={r.title}
                subtitle={r.subtitle}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <button onClick={() => addReminder('নতুন কাজ')} className="bg-[#092A54] hover:bg-[#0c386e] text-white font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 text-sm whitespace-nowrap border-2 border-white font-bengali">
            <Plus className="w-4 h-4" /> নতুন যুক্ত করুন
          </button>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}

