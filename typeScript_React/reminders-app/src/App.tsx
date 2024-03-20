import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';
import reminderService from './services/reminder';
import { log } from 'console';
import NewReminder from './components/NewReminder';
// const reminders: Reminder[] = [
//   { title: "hello", id: 1 },
// ];

function App() {
  const [reminders, setReminder] = useState<Reminder[]>([]);
  useEffect(() => {
    loadReminders();
  }, [])

  let loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminder(reminders);
  }
  const removeReminder = (id: number) => {
    setReminder(reminders.filter(reminder => reminder.id !== id));
  }
  const AddReminder = async(title: string) => {
    const newReminder=await reminderService.addReminder(title);
    setReminder([newReminder,...reminders]);
  }
  return (
    <div className="App">
      <NewReminder onAddReminder={AddReminder}></NewReminder>
      <ReminderList items={reminders} OnremoveReminder={removeReminder} />
    </div>
  );
}

export default App;
