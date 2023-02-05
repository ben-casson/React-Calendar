import { useState } from 'react';
import './App.scss';
import DatePicker from './DatePicker';



function App() {
    let date = new Date();
    console.log(date.toDateString());

    const [selectedDate, setSelectedDate] = useState('Sat Feb 04 2023');
    // const [selectedDate, setSelectedDate] = useState(new Date().toDateString());


    return (
        <>
            <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </>
    );
}

export default App;
