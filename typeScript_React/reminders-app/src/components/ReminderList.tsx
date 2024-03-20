import React from 'react';
import Reminder from '../models/Reminder';
import { promises } from 'dns';

interface ReminderListProps {
    items: Reminder[],
    OnremoveReminder: (id: number) => void;
}
type CrudFunction = (...args: any) => Promise<Reminder[]>;
function ReminderList({ items, OnremoveReminder }: ReminderListProps) {
    return (
        <ul className='list-group'>
            {
                items.map(item =>
                    <li className='list-group-item' key={item.id}>
                        {item.title}
                        <button className="btn btn-outline-danger ms-3 rounded-pill" onClick={() => {
                            OnremoveReminder(item.id)
                        }}>
                            Delete
                        </button>
                    </li>)
            }
        </ul>
    );
}

export default ReminderList;