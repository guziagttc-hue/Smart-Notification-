/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { QuickAdd } from './components/QuickAdd';
import { ReminderCard } from './components/ReminderCard';
import { BottomNav } from './components/BottomNav';
import { NewEventModal } from './components/NewEventModal';
import { TaskList } from './components/TaskList';
import { CategoryList } from './components/CategoryList';
import { SettingsList } from './components/SettingsList';
import { CalendarDays, ListChecks, Phone, Plus } from 'lucide-react';
import { Reminder, Task, Category } from './types';
import { useNotification } from './hooks/useNotification';

export default function App() {
  const { sendNotification } = useNotification();
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: '1', title: "ডাক্তারের সাথে অ্যাপয়েন্টমেন্ট", subtitle: "Dr. Karim", date: "2026-12-21", time: "10:30", icon: 'meeting' },
    { id: '2', title: "প্রজেক্ট প্রস্তাবনা জমা", subtitle: "Project Alpha", date: "2026-12-23", time: "16:00", icon: 'task' },
    { id: '3', title: "মুদির বাজার", subtitle: "Rice, Fish", date: "2026-12-24", time: "18:00", icon: 'call' },
  ]);
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: "অফিস মিটিংয়ের জন্য স্লাইড তৈরি করা", completed: false, category: 'মিটিং', date: '2026-12-21', time: '16:00' },
    { id: '2', title: "ডাক্তার অ্যাপয়েন্টমেন্টের বুকিং নিশ্চিত করা", completed: false, category: 'গুরুত্বপূর্ণ', date: '2026-12-22', time: '10:30' },
  ]);
  const [categories, setCategories] = useState<Category[]>([
    { id: '1', name: 'মিটিং', icon: 'calendar', count: 5 },
    { id: '2', name: 'ব্যক্তিগত', icon: 'user', count: 8 },
    { id: '3', name: 'বাজার', icon: 'cart', count: 3 },
    { id: '4', name: 'অফিস', icon: 'briefcase', count: 12 },
    { id: '5', name: 'কল লিস্ট', icon: 'phone', count: 4 },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reminderToEdit, setReminderToEdit] = useState<Reminder | null>(null);
  const [activeTab, setActiveTab] = useState<'reminders' | 'tasks' | 'categories' | 'settings'>('reminders');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentDate = now.toISOString().split('T')[0];
      const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

      reminders.forEach(r => {
        if (r.date === currentDate && r.time === currentTime) {
          sendNotification('রিমাইন্ডার!', r.title);
        }
      });
      tasks.forEach(t => {
        if (!t.completed && t.date === currentDate && t.time === currentTime) {
          sendNotification('কাজ!', t.title);
        }
      });
    }, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [reminders, tasks, sendNotification]);

  const addReminder = (reminder: { title: string; subtitle: string; date: string; time: string; icon: 'meeting' | 'task' | 'call' }) => {
    const newReminder: Reminder = {
      id: Date.now().toString(),
      ...reminder
    };
    setReminders([newReminder, ...reminders]);
  };

  const updateReminder = (updatedReminder: Reminder) => {
    setReminders(reminders.map(r => r.id === updatedReminder.id ? updatedReminder : r));
    setReminderToEdit(null);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };
  
  const getIcon = (type: string) => {
    switch(type) {
        case 'meeting': return <CalendarDays className="w-5 h-5" />;
        case 'task': return <ListChecks className="w-5 h-5" />;
        default: return <Phone className="w-5 h-5" />;
    }
  }

  const getBgColor = (type: string) => {
    switch(type) {
        case 'meeting': return 'bg-blue-100';
        case 'task': return 'bg-amber-100';
        default: return 'bg-blue-100';
    }
  }

  const getColor = (type: string) => {
    switch(type) {
        case 'meeting': return 'text-[#092A54]';
        case 'task': return 'text-amber-500';
        default: return 'text-[#1E88E5]';
    }
  }

  return (
    <div className="bg-gray-100 min-h-dvh flex items-center justify-center sm:p-4 font-bengali">
      <div className="relative w-full h-dvh sm:h-[844px] sm:max-w-[390px] bg-[#F4F6FA] flex flex-col shadow-2xl overflow-hidden sm:rounded-[40px]">
        
        <Header />

        <div className="flex-1 overflow-y-auto px-4 py-4 pb-24">
          {activeTab === 'reminders' && (
            <>
              <QuickAdd onAdd={(text) => addReminder({title: text, subtitle: 'নতুন কাজ', date: new Date().toISOString().split('T')[0], time: '09:00', icon: 'task'})} />

              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-3 font-bengali">আসন্ন রিমাইন্ডারসমূহ</h2>
                
                {reminders.map(r => (
                  <ReminderCard 
                    key={r.id}
                    icon={getIcon(r.icon)}
                    iconBg={getBgColor(r.icon)}
                    iconColor={getColor(r.icon)}
                    title={r.title}
                    subtitle={`${r.subtitle} ${r.date ? `• ${new Date(r.date).toLocaleDateString('bn-BD')} • ${r.time}` : ''}`}
                    onSubtitleClick={() => {
                        setReminderToEdit(r);
                        setIsModalOpen(true);
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {activeTab === 'tasks' && (
             <div>
                <h2 className="text-lg font-bold text-gray-800 mb-3 font-bengali">কাজসমূহ</h2>
                <TaskList tasks={tasks} onToggle={toggleTask} />
             </div>
          )}

          {activeTab === 'categories' && (
             <div>
                <h2 className="text-lg font-bold text-gray-800 mb-3 font-bengali">ক্যাটাগরি সমূহ</h2>
                <CategoryList categories={categories} />
             </div>
          )}
          
          {activeTab === 'settings' && (
             <div>
                <SettingsList />
             </div>
          )}
        </div>

        {activeTab === 'reminders' && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
            <button onClick={() => { setReminderToEdit(null); setIsModalOpen(true); }} className="bg-[#092A54] hover:bg-[#0c386e] text-white font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 text-sm whitespace-nowrap border-2 border-white font-bengali">
              <Plus className="w-4 h-4" /> নতুন যুক্ত করুন
            </button>
          </div>
        )}

        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

        {isModalOpen && (
          <NewEventModal 
            onClose={() => { setIsModalOpen(false); setReminderToEdit(null); }} 
            onAdd={addReminder} 
            reminderToEdit={reminderToEdit || undefined}
            onUpdate={updateReminder}
          />
        )}
      </div>
    </div>
  );
}

