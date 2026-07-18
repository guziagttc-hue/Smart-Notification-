import React, { useState } from 'react';
import { CalendarDays, ListChecks, Phone } from 'lucide-react';

interface QuickAddProps {
  onAdd: (text: string) => void;
}

export const QuickAdd = ({ onAdd }: QuickAddProps) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm mb-5">
      <h2 className="text-[#092A54] font-bold text-base mb-3 font-bengali">দ্রুত যুক্ত করুন</h2>
      <input 
        type="text" 
        placeholder="আমাকে মনে করিয়ে দিন..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        className="w-full bg-[#F5F7FA] border border-gray-200 rounded-xl py-2.5 px-4 text-sm focus:outline-none mb-3 font-bengali" 
      />
      
      <div className="grid grid-cols-3 gap-2">
        <button onClick={handleAdd} className="bg-[#092A54] text-white rounded-xl py-2 flex items-center justify-center text-xs font-semibold hover:opacity-90 font-bengali">
          <CalendarDays className="w-4 h-4 mr-1.5" />মিটিং
        </button>
        <button onClick={handleAdd} className="bg-[#FFB300] text-gray-950 rounded-xl py-2 flex items-center justify-center text-xs font-semibold hover:opacity-90 font-bengali">
          <ListChecks className="w-4 h-4 mr-1.5" />কাজ
        </button>
        <button onClick={handleAdd} className="bg-[#1E88E5] text-white rounded-xl py-2 flex items-center justify-center text-xs font-semibold hover:opacity-90 font-bengali">
          <Phone className="w-4 h-4 mr-1.5" />কল
        </button>
      </div>
    </div>
  );
};
