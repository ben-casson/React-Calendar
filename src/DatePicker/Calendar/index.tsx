import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { DaysInMonth, DaysOfWeek } from '../../enums';
import { months } from '../../App';
import Day from './Day';
import './index.scss';

interface ICalendarProps {
    isOpen: boolean;
    daysArray: Array<JSX.Element>;
    setDaysArray: Dispatch<SetStateAction<Array<JSX.Element>>>;
    changeMonth: Function;
    selectedDate: string;
    setSelectedDate: Dispatch<SetStateAction<string>>;
    calendarDisplayDate: string;
    setCalendarDisplayDate: Dispatch<SetStateAction<string>>;
}

type Day = {
    date: string;
    number: number;
    content: string;
};

export default function Calendar({
    isOpen,
    daysArray,
    setDaysArray,
    changeMonth,
    selectedDate,
    setSelectedDate,
    calendarDisplayDate,
    setCalendarDisplayDate,
}: ICalendarProps) {
    let dayOfWeek = calendarDisplayDate.slice(0, 3);
    let currentMonth = calendarDisplayDate.slice(4, 7);
    let currentYear = calendarDisplayDate.slice(11);
    let monthLength = DaysInMonth[currentMonth as keyof typeof DaysInMonth];
    let firstDayOfMonth = new Date(`01 ${currentMonth} ${currentYear}`).getDay();
    console.log(firstDayOfMonth);

    useEffect(() => {
        let tempArray = [...daysArray];
        for (let i = 0; i <= monthLength + firstDayOfMonth - 1; i++) {
            if (i < firstDayOfMonth) {
                tempArray.push(<div key={i}></div>);
                // console.log(i)
            } else {
                tempArray.push(<Day key={i} number={i - firstDayOfMonth + 1} />);
            }
        }
        setDaysArray(tempArray);
        console.log(daysArray);
    }, [calendarDisplayDate]);

    let monthYearText = calendarDisplayDate.slice(4, 7) + ' ' + calendarDisplayDate.slice(11);

    return (
        <div id='calendar' className={isOpen ? 'open' : 'closed'}>
            <div id='content'>
                <div id='month-year-week-container'>
                    <div id='month-year-container'>
                        <button id='btn-previous-year'></button>
                        <button
                            id='btn-previous-month'
                            onClick={() => changeMonth('previous')}
                        ></button>
                        <div>{monthYearText}</div>
                        <button id='btn-next-month' onClick={() => changeMonth('next')}></button>
                        <button id='btn-next-year'></button>
                    </div>
                    <div id='week-container'>
                        <div className='week'>Sun</div>
                        <div className='week'>Mon</div>
                        <div className='week'>Tue</div>
                        <div className='week'>Wed</div>
                        <div className='week'>Thu</div>
                        <div className='week'>Fri</div>
                        <div className='week'>Sat</div>
                    </div>
                </div>
                <div id='days-container'>{daysArray.map((element) => element)}</div>
            </div>
        </div>
    );
}
