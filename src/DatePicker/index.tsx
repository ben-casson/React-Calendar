import { useState, Dispatch, SetStateAction } from 'react';
import Calendar from './Calendar';
import { months } from '../App';
import './index.scss';

interface IDatePickerProps {
    selectedDate: string;
    setSelectedDate: Dispatch<SetStateAction<string>>;
}

export default function DatePicker({ selectedDate, setSelectedDate }: IDatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [daysArray, setDaysArray] = useState(Array<JSX.Element>);

    let monthDayText = selectedDate.slice(4, 7) + ' ' + selectedDate.slice(8, 10);

    function getPreviousMonth() {
        setDaysArray([]);
        let currentMonth = months.findIndex(
            (element) => element.month == `${selectedDate.slice(4, 7)}`
        );
        let newMonth = currentMonth === 0 ? months.length - 1 : currentMonth - 1;
        let newYear =
            currentMonth === 0 ? parseInt(selectedDate.slice(11)) - 1 : selectedDate.slice(11);
        let tempDate = selectedDate.slice(0, 4) + months[newMonth].month + selectedDate.slice(7, 11) + newYear;
        setSelectedDate(tempDate);
        console.log(selectedDate);
    }

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
                <Calendar
                    isOpen={isOpen}
                    daysArray={daysArray}
                    setDaysArray={setDaysArray}
                    getPreviousMonth={getPreviousMonth}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </div>
        </section>
    );
}
