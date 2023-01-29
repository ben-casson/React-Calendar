import { useState } from 'react';
import Calendar from './Calendar';
import './index.scss';

export default function DatePicker() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            <div id='wrapper-date-picker'>
                <div id='btn-container'>
                    <button id='btn-previous-day' title='Go to the previous day'></button>
                    <button
                        id='btn-selected-day'
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        Today
                    </button>
                    <button id='btn-next-day' title='Go to the next day'></button>
                </div>
                <Calendar isOpen={isOpen} />
            </div>
        </section>
    );
}
