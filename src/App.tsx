import { useState } from 'react';
import './App.scss';
import DatePicker from './DatePicker';

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

function App() {
    let date = new Date();
    console.log(date.toDateString());

    // const [selectedDate, setSelectedDate] = useState('Tue Apr 04 2023');
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());

    return (
        <>
            <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </>
    );
}

export default App;
