import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { daysOfWeek } from '../../App';
import './Day.scss';

interface IDayProps {
    number: number;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    selectedDate: string;
    setSelectedDate: Dispatch<SetStateAction<string>>;
    calendarDisplayDate: string;
    handleClick: Function;
    selectedDay: string;
    setSelectedDay: Dispatch<SetStateAction<string>>;
}

export default function Day({
    number,
    isOpen,
    setIsOpen,
    selectedDate,
    setSelectedDate,
    calendarDisplayDate,
    handleClick,
    selectedDay,
    setSelectedDay,
}: IDayProps) {
    // function handleClick() {
    //     let month = calendarDisplayDate.slice(4, 7);
    //     let year = calendarDisplayDate.slice(11);
    //     let day = number < 10 ? '0' + number.toString() : number;
    //     let dayofWeek = daysOfWeek[new Date(`${day} ${month} ${year}`).getDay()];
    //     setSelectedDate(`${dayofWeek + ' ' + month + ' ' + day + ' ' + year}`);
    //     // setDayStyle('btn-day selected');
    //     console.log('selected day' + number);
    //     console.log('1: ' + new Date().toDateString());
    //     console.log('2: ' + calendarDisplayDate);
    // }

    return (
        <button
            onClick={() =>
                handleClick(
                    number,
                    calendarDisplayDate.slice(0, 8) +
                        number.toString() +
                        calendarDisplayDate.slice(10)
                )
            }
            className={
                'btn-day' +
                // (parseInt(selectedDate.slice(8, 10)) === number &&
                // calendarDisplayDate.slice(4, 7) === selectedDate.slice(4, 7) &&
                // calendarDisplayDate.slice(11) === selectedDate.slice(11)
                (new Date().toDateString() ===
                calendarDisplayDate.slice(0, 8) + number + calendarDisplayDate.slice(10)
                    ? ' today'
                    : '') +
                (selectedDay ===
                calendarDisplayDate.slice(0, 8) + number.toString() + calendarDisplayDate.slice(10)
                    ? ' selected'
                    : ' hover')
            }
        >
            {number}
        </button>
    );
}
