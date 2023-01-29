import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import Calendar from './Calendar';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Calendar />
        </>
    );
}

export default App;
