import { useState, Dispatch, SetStateAction } from 'react';
import Calendar from './Calendar';
import './index.scss';

interface IDatePickerProps {
    selectedDate: string;
    setSelectedDate?: Dispatch<SetStateAction<string>>;
}

export default function DatePicker({ selectedDate, setSelectedDate }: IDatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);

    let monthDayText = selectedDate.slice(4, 7) + ' ' + selectedDate.slice(8, 10);

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
                        {monthDayText}
                    </button>
                    <button id='btn-next-day' title='Go to the next day'></button>
                </div>
                <Calendar isOpen={isOpen} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>
        </section>
    );
}
