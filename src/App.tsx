import { useState } from 'react';
import './App.scss';
import DatePicker from './DatePicker';
import PageContent from './PageContent';

export const months = [
    { month: 'Jan', days: 31 },
    { month: 'Feb', days: 28, daysLeap: 29 },
    { month: 'Mar', days: 31 },
    { month: 'Apr', days: 30 },
    { month: 'May', days: 31 },
    { month: 'Jun', days: 30 },
    { month: 'Jul', days: 31 },
    { month: 'Aug', days: 31 },
    { month: 'Sep', days: 30 },
    { month: 'Oct', days: 31 },
    { month: 'Nov', days: 30 },
    { month: 'Dec', days: 31 },
];

export const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function App() {
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const [calendarDisplayDate, setCalendarDisplayDate] = useState(selectedDate);
    const [notes, setNotes] = useState([{ date: `${selectedDate}`, text: 'test text' }]);
    const [notesMap, setNotesMap] = useState(new Map<string, string>());

    return (
        <>
            <DatePicker
                notes={notes}
                setNotes={setNotes}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                calendarDisplayDate={calendarDisplayDate}
                setCalendarDisplayDate={setCalendarDisplayDate}
            />
            <PageContent
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                notesMap={notesMap}
                setNotesMap={setNotesMap}
            />
        </>
    );
}

export default App;
