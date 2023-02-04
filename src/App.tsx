import { useState } from 'react';
import './App.scss';
import DatePicker from './DatePicker';



function App() {
    const [selectedDate, setSelectedDate] = useState('Sat Feb 04 2023');


    return (
        <>
            <DatePicker selectedDate={selectedDate} />
        </>
    );
}

export default App;
