import { useState, Dispatch, SetStateAction } from 'react';
import Calendar from './Calendar';
import { months } from '../App';
import { daysOfWeek } from '../App';
import './index.scss';

interface IDatePickerProps {
    selectedDate: string;
    setSelectedDate: Dispatch<SetStateAction<string>>;
    calendarDisplayDate: string;
    setCalendarDisplayDate: Dispatch<SetStateAction<string>>;
}

export default function DatePicker({
    selectedDate,
    setSelectedDate,
    calendarDisplayDate,
    setCalendarDisplayDate,
}: IDatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [daysArray, setDaysArray] = useState(Array<JSX.Element>);

    let monthDayText = selectedDate.slice(4, 7) + ' ' + selectedDate.slice(8, 10);

    function changeMonth(timeDirection: string) {
        setDaysArray([]);
        let currentMonth = months.findIndex(
            (element) => element.month == `${calendarDisplayDate.slice(4, 7)}`
        );
        let newMonth;
        let newYear;
        if (timeDirection === 'previous') {
            newMonth = currentMonth === 0 ? months.length - 1 : currentMonth - 1;
            newYear =
                currentMonth === 0
                    ? parseInt(calendarDisplayDate.slice(11)) - 1
                    : calendarDisplayDate.slice(11);
        } else {
            newMonth = currentMonth === months.length - 1 ? 0 : currentMonth + 1;
            newYear =
                currentMonth === months.length - 1
                    ? parseInt(calendarDisplayDate.slice(11)) + 1
                    : calendarDisplayDate.slice(11);
        }
        let tempDate =
            calendarDisplayDate.slice(0, 4) +
            months[newMonth].month +
            calendarDisplayDate.slice(7, 11) +
            newYear;
        setCalendarDisplayDate(tempDate);
        console.log(calendarDisplayDate);
    }

    function changeYear(timeDirection: string) {
        setDaysArray([]);
        let newYear =
            timeDirection === 'previous'
                ? parseInt(calendarDisplayDate.slice(11)) - 1
                : parseInt(calendarDisplayDate.slice(11)) + 1;
        let dayOfWeek: number = new Date(`01 ${calendarDisplayDate.slice(4, 7)} ${newYear}`).getDay()
        console.log('dayOfWeek ' + dayOfWeek)        
        let firstDayOfMonth = daysOfWeek[dayOfWeek];
        console.log('firstDayOfMonth ' + firstDayOfMonth) 
        console.log('newYear ' + newYear) 
        let tempDate =
            firstDayOfMonth + ' ' +
            calendarDisplayDate.slice(4, 7) +
            ' 01 ' +
            newYear;
            console.log('tempDate ' + tempDate)
        setCalendarDisplayDate(tempDate);
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
                            if (
                                !isOpen &&
                                (calendarDisplayDate.slice(4, 7) !== selectedDate.slice(4, 7) ||
                                    calendarDisplayDate.slice(11) !== selectedDate.slice(11))
                            ) {
                                setDaysArray([]);
                                setCalendarDisplayDate(selectedDate);
                            }
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
                    changeYear={changeYear}
                    changeMonth={changeMonth}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    calendarDisplayDate={calendarDisplayDate}
                    setCalendarDisplayDate={setCalendarDisplayDate}
                />
            </div>
        </section>
    );
}
