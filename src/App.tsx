import { useState } from 'react';
import './App.scss';
import DatePicker from './DatePicker';

enum DaysInMonth {
    Jan = 31,
    Feb = 28,
    FebLeap = 29,
    Mar = 31,
    Apr = 30,
    May = 31,
    Jun = 30,
    Jul = 31,
    Aug = 31,
    Sep = 30,
    Oct = 31,
    Nov = 30,
    Dec = 31,
}

function App() {

    return (
        <>
            <DatePicker />
        </>
    );
}

export default App;
