import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import DatePicker from './DatePicker';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <DatePicker />
        </>
    );
}

export default App;
