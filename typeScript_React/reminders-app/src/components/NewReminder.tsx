import React, { useState } from 'react';

interface NewReminderProps {
    onAddReminder: (title: string) => void;
}
function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState('');
    const submitForm = (e: React.FormEvent) => {
        if (title == '') {

        } else {
            e.preventDefault();
            onAddReminder(title);
            setTitle('');
        }
    }
    return (
        <form className='mb-2' onSubmit={submitForm}>
            <label htmlFor="title"></label>
            <input value={title}
                onChange={e => {
                    setTitle(e.target.value)
                }}
                id="title" type="text" className="form-control mb-2" />
            <button className="btn btn-primary rounded-pill" type='submit'>
                add reminder
            </button>
        </form>
    );
}

export default NewReminder;